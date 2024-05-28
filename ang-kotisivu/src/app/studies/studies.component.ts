import { Component, OnInit } from '@angular/core';
import { Study } from '../datas';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
  studies!: Study[];

  constructor(private hpservice: HomepageService) {}

  getStudies(): void {
    this.hpservice.getStudies().subscribe((studies) => (this.studies = studies));
  }

  ngOnInit(): void {
    this.getStudies();
  }
}
