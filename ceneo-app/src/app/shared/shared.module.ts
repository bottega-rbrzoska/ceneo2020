import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BannerHeaderComponent } from './banner-header/banner-header.component';
import { BannerContentComponent } from './banner-content/banner-content.component';
import { ClickService } from './click.service';
import { MultiplyPipe } from './multiply.pipe';
import { HighlightDirective } from './highlight.directive';
import { ShowForAdminDirective } from './show-for-admin.directive';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [BannerComponent, BannerHeaderComponent,
    BannerContentComponent,
     MultiplyPipe, HighlightDirective, ShowForAdminDirective, NotificationContainerComponent, NotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [BannerComponent, MultiplyPipe, HighlightDirective, ShowForAdminDirective, NotificationContainerComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ClickService, NotificationService ]
    }
  }
}
