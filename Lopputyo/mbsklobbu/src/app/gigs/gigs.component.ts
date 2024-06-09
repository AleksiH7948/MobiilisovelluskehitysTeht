import { Component } from '@angular/core';
import { gigs } from '../gigs';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrl: './gigs.component.css',
})
export class GigsComponent {
  gigs = gigs;

  constructor() {}
}
