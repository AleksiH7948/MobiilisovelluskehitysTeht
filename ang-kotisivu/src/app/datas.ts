/* Angular-sovellukseen sisään tulevan datan pitää olla vahvasti tyypitettyä
jotta ei tule mitään väärinkäsityksiä sen suhteen miten sisään tulevaa dataa
käsitellään. Niinpä sovelluksen datalle tehdään tietomalli joka kertoo
millaista data on. Tietomalli esitetään rajapintaluokkien avulla. Luokissa kerrotaan
millaisia ominaisuuksia sovelluksen datan sisältävillä olioilla pitää olla.
Luokkien propertyillä on TS-tietotyypit. Tässä tapauksessa kaikki luokat ovat
samanlaisia eli niissä on vain propertyt id ja info, joten periaatteessa
pärjättäisiin yhdellä rajapintaluokalla, mutta nyt luokat voi myöhemmin muokata
erilaisiksi jos on tarpeen.*/

interface Mydata {
  id: number;
  info: string;
}

interface Study {
  id: number;
  info: string;
}

interface Hobby {
  id: number;
  info: string;
}

export { Mydata, Study, Hobby };
