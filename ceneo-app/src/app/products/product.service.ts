import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { NotificationService } from '../shared/notification.service';

const apiUrl = environment.apiUrl;

@Injectable()
export class ProductService {
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
