import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable, forkJoin } from 'rxjs';
import { Product } from 'src/app/models/product';
import { lookupService } from 'dns';

@Component({
  selector: 'ce-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product>
  constructor(private route: ActivatedRoute,
    private productsService: ProductService) {
    this.product$ = productsService.getById(route.snapshot.params.id)
  }

  ngOnInit(): void {
  }

}
