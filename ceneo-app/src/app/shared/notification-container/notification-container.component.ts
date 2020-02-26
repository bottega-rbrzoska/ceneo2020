import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory, OnDestroy } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { NotFoundPageComponent } from 'src/app/not-found-page/not-found-page.component';
import { NotificationService } from '../notification.service';
import { takeUntilNgDestroy } from 'take-until-ng-destroy';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ce-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnDestroy {

  private notificationComponentFactory: ComponentFactory<NotificationComponent>
  @ViewChild('container', { read: ViewContainerRef, static: true }) viewContainer: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver, private notification: NotificationService) {
    this.notificationComponentFactory = this.cfr.resolveComponentFactory(NotificationComponent);

    notification.notifications$
    .pipe(takeUntilNgDestroy(this))
    .subscribe((message) => {
      this.showNotification(message);
    })
  }

  private showNotification(message): void {
    const comp = this.viewContainer.createComponent(this.notificationComponentFactory);
    const subs = comp.instance.close.subscribe(() => {
      subs.unsubscribe();
      comp.destroy();
    })
    comp.instance.message = message;
    setTimeout(() => {
      subs.unsubscribe();
      comp.destroy();
    }, 3000)
  }

  ngOnDestroy() {
  }

}
