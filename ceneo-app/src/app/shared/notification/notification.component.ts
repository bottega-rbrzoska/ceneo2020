import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ce-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Output() close = new EventEmitter()
  message: any;
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.close.emit();
  }

}
