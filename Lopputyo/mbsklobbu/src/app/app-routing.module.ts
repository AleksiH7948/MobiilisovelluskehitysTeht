import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { YhteysComponent } from './yhteys/yhteys.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GigsComponent } from './gigs/gigs.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'yhteys', component: YhteysComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'gigs', component: GigsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
