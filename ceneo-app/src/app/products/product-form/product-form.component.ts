import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ce-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}
