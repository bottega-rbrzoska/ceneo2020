import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, distinctUntilChanged } from 'rxjs/operators';
import { NotificationService } from '../shared/notification.service';

const apiUrl = environment.apiUrl;

export interface ProductsState {
  pending: boolean;
  products: Product[];
  selectedProduct: Product;
}

@Injectable()
export class ProductService {

  private history = [];
  private initialProductsState: ProductsState = {
    pending: false,
    products: [],
    selectedProduct: null
  }
  private store = new BehaviorSubject<ProductsState>(this.initialProductsState);

  get productsState$() {
    return this.store.pipe(
      map(state => state.products),
      distinctUntilChanged())
  }

  get selectedProductState$() {
    return this.store.pipe(
      map(state => state.selectedProduct),
      distinctUntilChanged())
  }

  get pendingState$() {
    return this.store.pipe(map(state => state.pending),
    distinctUntilChanged())
  }



  setState(state: Partial<ProductsState>, action: string) {
    const currentState = this.store.value;
    const newState = { ...currentState, ...state };
    this.store.next(newState);
    this.history.push({action, state: currentState})
  }


  fetchProducts() {
    this.setState({pending: true}, 'FETCH_PRODUCTS_START');
    this.httpClient.get<Product[]>(apiUrl + '/products').subscribe((prods) => {
      this.setState({pending: false, products: prods }, 'FETCH_PRODUCTS_SUCCESS');
    })

  }













  private productsSubj =  new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubj.asObservable();

  constructor(private httpClient: HttpClient, private notifications: NotificationService) { }

  getProducts() {
    this.httpClient.get<Product[]>(apiUrl + '/products').subscribe(prods => {
      this.productsSubj.next(prods);
    });
  }

  updateProduct(product: Product) {
    return this.httpClient.put(apiUrl + '/products/' + product.id, product).pipe(
      tap(() => this.notifications.pushNotification({title: 'Success!!', content: 'Udało się zmienic produkt ' + product.name}))
    )
  }

  getById(id: string) {
    return this.httpClient.get<Product>(apiUrl + '/products/' + id)
  }
}
