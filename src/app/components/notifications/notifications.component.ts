import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Type } from '../../services/notification.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  constructor(private notifyService: NotificationService) {}

  show = false;
  colour: string;
  title: string;
  message: string;
  icon: string;

  ngOnInit() {
    this.notifyService.$notification.subscribe(notification => {
      this.show = true;
      switch (notification.Type) {
        case Type.Error:
          this.colour = 'red';
          this.title = 'Error';
          this.icon = 'error';
          break;
        case Type.Information:
          this.colour = 'blue';
          this.title = 'Information';
          this.icon = 'info';
          break;
        case Type.Warning:
          this.colour = 'yellow';
          this.title = 'Warning';
          this.icon = 'warning';
          break;
      }
      this.message = notification.Message;

      setTimeout(() => {
        this.show = false;
      }, 5000);
    });
  }

  ngOnDestroy() {}
}
