import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventsService } from 'src/app/http/services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  @Input() tittle: string = '';

  @Output() eventClicked = new EventEmitter<number>();

  constructor(public eventsService: EventsService) { }

  public navigateToEvent(eventId: number) {
    this.eventClicked.emit(eventId);
  }
}
