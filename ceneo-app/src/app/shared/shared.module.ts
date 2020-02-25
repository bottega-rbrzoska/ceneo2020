import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BannerHeaderComponent } from './banner-header/banner-header.component';
import { BannerContentComponent } from './banner-content/banner-content.component';
import { ClickService } from './click.service';

@NgModule({
  declarations: [BannerComponent, BannerHeaderComponent, BannerContentComponent],
  imports: [
    CommonModule
  ],
  exports: [BannerComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ClickService ]
    }
  }
}
