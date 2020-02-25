import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { ClickService } from '../click.service';

@Component({
  selector: 'ce-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnDestroy, OnChanges {

  bannerTitle;

  @Input()
  set title(val:string) {
    this.bannerTitle = val.toUpperCase()
  }

  @Input() content;
  clickCounter;
  click$;
  subscription;
  constructor(private clickService: ClickService) {
    this.click$ =  this.clickService.click$;
    // this.subscription = this.clickService.click$.subscribe(c => {
    //   console.log('clicks in banner ' + c)
    //   this.clickCounter = c});
   }

  ngOnInit(): void {
  }

  clickBanner() {
    this.clickService.click();
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  ngOnChanges(changes) {
    console.log(changes)
  }


}
