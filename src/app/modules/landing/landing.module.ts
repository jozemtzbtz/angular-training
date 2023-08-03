import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const LOADING_ROUTES = [
  {
    path: '',
    component: LandingPageComponent
  }
];


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LOADING_ROUTES),
    SharedModule
  ]
})
export class LandingModule { }
