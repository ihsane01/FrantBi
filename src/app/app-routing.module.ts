import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHART1Component } from './chart1/chart1.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CHART2Component } from './chart2/chart2.component';
import { CHART3Component } from './chart3/chart3.component';
import { CHART4Component } from './chart4/chart4.component';

const routes: Routes = [
  { path: 'chart1', component: CHART1Component },
  { path: 'chart2', component: CHART2Component },
  { path: 'chart3', component: CHART3Component },
  { path: 'chart4', component: CHART4Component },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
