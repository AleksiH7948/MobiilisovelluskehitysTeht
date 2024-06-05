import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Subscription } from 'rxjs';
import { PushNotificationService } from './push-notification.service';

const VAPID_PUBLIC =
  'BPI59S47Kcg4MlbJQm2953hEu_LzkOqETKrkJ2Py3f3IEXUHdQrrCQID-on9CV-C2QNYI38KdtkONQi7WfXpwZY';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-pwakartta';

  constructor(swPush: SwPush, pushService: PushNotificationService) {
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC,
        })
        .then((Subscription) => {
          // lähetetään subscription serverille
          // sendSubscriptionToTheServer palauttaa observablen, joka
          // tilataan subscribe-metodilla
          pushService.sendSubscriptionToTheServer(Subscription).subscribe();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
