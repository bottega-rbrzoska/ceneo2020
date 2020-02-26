import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

@Component({
  selector: 'ce-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChildren(HighlightDirective) highlights: QueryList<HighlightDirective>
  products$: Observable<Product[]>;
  constructor( private productService: ProductService) {
    this.products$ = this.productService.products$;
    this.productService.getProducts();
  }

  ngOnInit(): void {
  }

  highlightAll() {
    this.highlights.forEach(hd => {
      hd.setHighlight()
    })
  }

}
