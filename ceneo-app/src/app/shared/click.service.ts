import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ClickService {

  private clickSubj = new BehaviorSubject(0);

  click$ = this.clickSubj.asObservable()
  constructor() { }

  click() {
    this.clickSubj.next(this.clickSubj.value + 1)
  }
}
