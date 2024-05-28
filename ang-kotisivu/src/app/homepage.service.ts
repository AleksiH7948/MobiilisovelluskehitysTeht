import { Injectable } from '@angular/core';
// HttpClient tarvitaan datan lähettämiseen palvelimelle ja sen hakemiseen palvelimelta
import { HttpClient } from '@angular/common/http';
// Palvelimelta tuleva data toimitetaan komponentille Observablena eli reaktiivisesti.
import { Observable } from 'rxjs';
// tietotyyppi
import { Mydata, Study, Hobby } from './datas';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  // valepalvelimen osoitteet
  mydataurl = 'api/mydatas';
  studiesurl = 'api/studies';
  hobbiesurl = 'api/hobbies';

  // liitetään eli injektoidaan HttpClient-olio tähän luokkaan konstruktorin argumenttina (Dependency injection)
  constructor(private http: HttpClient) {}

  // Tehdään palvelimelle pyyntö jolla haetaan data observablena
  getMydata(): Observable<Mydata[]> {
    return this.http.get<Mydata[]>(this.mydataurl);
    //virheenkäsittely voidaan tehdä tähän
  }

  getStudies(): Observable<Study[]> {
    return this.http.get<Study[]>(this.studiesurl);
    //virheenkäsittely voidaan tehdä tähän
  }

  // getHobbies()
}
