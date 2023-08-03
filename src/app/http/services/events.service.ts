import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public eventsList: any[] = [];

  constructor() { }

  public getEvents() {
    this.eventsList = [
      {
        id: 1,
        name: 'cadilacs'
      },
      {
        id: 2,
        name: 'Decadentes'
      },
      {
        id: 3,
        name: 'molotov'
      }
    ]
  }
}
