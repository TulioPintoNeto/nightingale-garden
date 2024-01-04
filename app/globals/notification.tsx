import {_NotificationContainer, NotificationManager} from 'react-notifications';

export abstract class Notification {
  static success(msg: string) {
    NotificationManager.success(msg);
  }
}

export const NotificationContainer = () => <_NotificationContainer />;
