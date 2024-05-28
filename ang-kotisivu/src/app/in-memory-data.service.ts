/*
Tämä tiedosto esittää valepalvelimen tietokannan sisällön.
Tämä data haetaan http-protokollan välityksellä frontend-sovellukseen.
Tämä poistetaan sitten kun fronttisovellus on valmis ja voidaan ryhtyä käyttämään
oikeaa palvelinta.
*/
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mydata, Study, Hobby } from './datas';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() { 
    const mydatas: Mydata[] = [
      { id: 1, info: 'Päällikkö Hiihtävä Hirvi' },
      { id: 2, info: 'Asuu Jyväsintiaanien kylässä' },
      { id: 3, info: 'Mieliruoka keitetyt nauriit' },
      { id: 4, info: 'Mielijuoma nokikansan virvoke' },
    ];
    const studies: Study[] = [
      { id: 1, info: 'Elämän kiertokoulu' },
      { id: 2, info: 'Kansallinen kansakoulu' },
      { id: 3, info: 'Opillinen oppikoulu' },
      { id: 4, info: 'Jyväsintiaanikylän AMK' },
    ];
    // const hobbies
    return { mydatas, studies };
  }
}
