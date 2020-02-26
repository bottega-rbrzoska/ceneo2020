import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ProductService {
  private productsSubj =  new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubj.asObservable();

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get<Product[]>(apiUrl + '/products').subscribe(prods => {
      this.productsSubj.next(prods);
    });
  }

  updateProduct(product: Product) {
    return this.httpClient.put(apiUrl + '/products/' + product.id, product)
  }

  getById(id: string) {
    return this.httpClient.get<Product>(apiUrl + '/products/' + id)
  }
}
