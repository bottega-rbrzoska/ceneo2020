import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Injectable()
export class TestService {

  showLoader = false;
  private test = 'private1!!'
  counter = 0;
  constructor( private httpClient: HttpClient) { }

  incr() {
    this.counter++;
  }

  getTestData() {
    return this.httpClient.get<any>('http://localhost.test:3000/test')
    .pipe(finalize(() => {
      console.log('hide loader')
      this.showLoader = false
    }))
  }
}
