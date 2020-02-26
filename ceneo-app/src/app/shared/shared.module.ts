import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BannerHeaderComponent } from './banner-header/banner-header.component';
import { BannerContentComponent } from './banner-content/banner-content.component';
import { ClickService } from './click.service';
import { MultiplyPipe } from './multiply.pipe';
import { HighlightDirective } from './highlight.directive';
import { ShowForAdminDirective } from './show-for-admin.directive';

@NgModule({
  declarations: [BannerComponent, BannerHeaderComponent,
    BannerContentComponent,
     MultiplyPipe, HighlightDirective, ShowForAdminDirective],
  imports: [
    CommonModule
  ],
  exports: [BannerComponent, MultiplyPipe, HighlightDirective, ShowForAdminDirective]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ClickService ]
    }
  }
}
