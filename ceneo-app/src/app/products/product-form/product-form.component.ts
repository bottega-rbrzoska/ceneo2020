import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ce-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product;
  @Output() saveProduct = new EventEmitter();
  myProductForm: FormGroup;

  constructor() {
    this.myProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.maxLength(100)),
      price: new FormControl('', Validators.min(1)),
      isActive: new FormControl(false),
      category: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    if(this.product) {
      this.myProductForm.patchValue(this.product)
    }
  }

  handleSubmit() {
    if(this.myProductForm.valid) {
      this.saveProduct.emit(this.myProductForm.value);
    }
  }

}
