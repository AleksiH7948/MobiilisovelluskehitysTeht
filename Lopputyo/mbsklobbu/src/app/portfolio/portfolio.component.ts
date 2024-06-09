import { Component } from '@angular/core';
import { musicproject } from '../music';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  music = musicproject;

  constructor() {}
}
