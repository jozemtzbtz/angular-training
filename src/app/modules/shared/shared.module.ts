import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './components/events-list/events-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatList, MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    EventsListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    EventsListComponent
  ]
})
export class SharedModule { }
