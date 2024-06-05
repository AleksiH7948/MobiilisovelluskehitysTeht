import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'http://localhost:3000/subscription';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {
  // Otetaan http-oliolla yhteys serveriin
  constructor(private http: HttpClient) {}

  // Tässä otetaan yhteys palvelimeen funktiolla, joka käyttää post-metodia
  public sendSubscriptionToTheServer(Subscription: PushSubscription) {
    return this.http.post(SERVER_URL, Subscription);
  }
}
