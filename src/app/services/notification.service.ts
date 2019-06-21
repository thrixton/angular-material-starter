import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

export enum Type {
  Information = 'INFORMATION',
  Warning = 'WARNING',
  Error = 'ERROR'
}

export interface Notification {
  Type: Type;
  Message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  $notification: Subject<Notification> = new Subject();

  constructor(private snackBar: MatSnackBar) {}

  public onError(message: string) {
    this.onNotification(Type.Error, message);
  }
  public onInformation(message: string) {
    this.onNotification(Type.Information, message);
  }
  public onWarning(message: string) {
    this.onNotification(Type.Warning, message);
  }

  public onSnackMessage(message: string) {
    this.snackBar.open(message, 'Dismiss', { duration: 1500 });
  }

  private onNotification(type: Type, message: string) {
    console.log(`Notification. Type: ${type}, Message: ${message}`);
    this.$notification.next({ Type: type, Message: message });
  }
}
