import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/http/services/events.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public tittle: string = 'La mejor experiencia en eventos cucksicales';

  constructor(private eventsService: EventsService){

  }

  ngOnInit(): void {
    this.eventsService.getEvents();
   }

  public navigateToEvent(eventId: number){
    console.log('evento id: ', eventId);
  }
}
