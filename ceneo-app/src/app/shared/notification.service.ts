import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {

  private notificationsSubj = new Subject();
  notifications$ = this.notificationsSubj.asObservable();

  constructor() { }

  pushNotification(message) {
    this.notificationsSubj.next(message)
  }
}
