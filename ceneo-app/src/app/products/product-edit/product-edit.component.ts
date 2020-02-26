import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable, forkJoin } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'ce-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product>
  constructor(private route: ActivatedRoute, private router: Router,
    private productsService: ProductService) {
    this.product$ = productsService.getById(route.snapshot.params.id)
  }

  ngOnInit(): void {
  }
  handleSave(product: Product) {
    this.productsService.updateProduct({ ...product, id: this.route.snapshot.params.id})
    .subscribe(() =>this.router.navigateByUrl('/products'))
  }
}
