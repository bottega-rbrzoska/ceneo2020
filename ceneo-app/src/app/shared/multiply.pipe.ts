import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply',
})
export class MultiplyPipe implements PipeTransform{

  transform(value: number, mult: number): number {
    console.log('multipla pajp')
    return value * mult;
  }

}
