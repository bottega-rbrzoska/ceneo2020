import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { TestService } from '../core/test.service';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'ce-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {


  @Input('testInput') myInput;
  @Output() testOutput = new EventEmitter<string>()
  constructor(public testService: TestService) {

    const subj = new BehaviorSubject(0);

    subj.next(1)
    subj.next(2)
    subj.next(3)

    subj.subscribe(val => console.log(val))
    console.log(subj.value);



    const obs = of(1,2,3,4)
    .pipe(
      tap(val => console.log('Wartosc z tapa: ' + val)),
      filter(val => val > 2),
      map( val => val * 2)
      );

    // obs.subscribe(
    //   value => console.log(value),
    //   err => console.error(err),
    //   () => console.log('complete!'));


    // setTimeout(() => {
    //   this.testService.incr();
    //   console.log('counter: ' + this.testService.counter)
    // }, 2000)
  }

  ngOnInit(): void {
  }

}
