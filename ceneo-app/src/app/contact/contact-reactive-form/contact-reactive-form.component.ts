import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ce-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.scss']
})
export class ContactReactiveFormComponent implements OnInit {

  myContactForm: FormGroup;
  constructor() {
    this.myContactForm = new FormGroup({
      email: new FormControl('zenek@oczyzielone.pl', Validators.required),
      message: new FormControl('', [Validators.maxLength(20), this.dupaValidator])
    }, {
      updateOn: 'submit'
    })

    this.myContactForm.valueChanges
    .pipe(debounceTime(400))
    .subscribe(values => {
      console.log(values)
    })
    this.myContactForm.get('email').statusChanges
    .subscribe(status => {
      if(status === 'INVALID' ) {
        this.myContactForm.get('message').disable()
      } else {
        this.myContactForm.get('message').enable()
      }
    })

  }

  ngOnInit(): void {
  }

  dupaValidator(control: AbstractControl): ValidationErrors | null {
    return control.value.includes('dupa') ? { dupaError: { alternatywneWyrazy: 'kwiatuszek'}} : null;
  }


  handleSubmit() {
    console.log(this.myContactForm.getRawValue())
    if(this.myContactForm.valid) {
      console.log(this.myContactForm.value)
    } else {
      console.error('niepoprawny formularz <3 !!')
    }
  }

}
