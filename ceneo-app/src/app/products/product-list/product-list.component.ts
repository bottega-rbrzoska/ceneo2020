import { Component, OnInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { HighlightDirective } from 'src/app/shared/highlight.directive';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ce-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChildren(HighlightDirective) highlights: QueryList<HighlightDirective>
  products$: Observable<Product[]>;
  constructor( private productService: ProductService, private cdr: ChangeDetectorRef) {
    this.cdr.detach();
    this.products$ = this.productService.products$;
    this.productService.getProducts();
  }

  ngOnInit(): void {
  }

  highlightAll() {
    this.cdr.detectChanges();
    this.highlights.forEach(hd => {
      hd.setHighlight()
    })
  }

}
