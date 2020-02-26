import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ce-contact-template-form',
  templateUrl: './contact-template-form.component.html',
  styleUrls: ['./contact-template-form.component.scss']
})
export class ContactTemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(value: NgForm) {
    if(value.valid) {
      console.log(value)
    } else {
      alert('invalid ci...u!!')
    }
  }
}
