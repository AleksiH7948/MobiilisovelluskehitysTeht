import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"book-2052c","appId":"1:456412533194:web:a0b3e0315c075b0e9f7f33","storageBucket":"book-2052c.appspot.com","apiKey":"AIzaSyAKp6TBN0t9KrAU59jO-UZgGm_MUpGBPGA","authDomain":"book-2052c.firebaseapp.com","messagingSenderId":"456412533194"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
