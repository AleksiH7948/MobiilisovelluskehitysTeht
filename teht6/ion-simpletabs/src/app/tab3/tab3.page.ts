import { Component } from '@angular/core';
import { hobbies } from '../data';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  hobby = hobbies;

  constructor() {}
}
