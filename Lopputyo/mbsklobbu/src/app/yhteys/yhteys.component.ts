import { Component } from '@angular/core';
import { yt } from '../yt';

@Component({
  selector: 'app-yhteys',
  templateUrl: './yhteys.component.html',
  styleUrl: './yhteys.component.css',
})
export class YhteysComponent {
  yhteys = yt;

  constructor() {}
}
