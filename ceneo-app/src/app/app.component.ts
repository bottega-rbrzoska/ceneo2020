import { Component, OnInit } from '@angular/core';
import { NotificationService } from './shared/notification.service';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  inputData = { testNumber: 1, testString: 'dwa' };
  title = 'ceneo-app';
  constructor(private notificationService: NotificationService) {

  }
  ngOnInit() {
    this.notificationService.pushNotification({message: 'test', title: 'test'})
  }
  handleTestOutput(data) {
    console.log(data)
  }
  handleClick(data) {
    console.log(data)
  }
}
