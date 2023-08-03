import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { EventsListComponent } from './events-list.component';
import { MatListModule } from '@angular/material/list';

describe('EventsListComponent', () => {
  let spectator: Spectator<EventsListComponent>;
  const createComponent = createComponentFactory(EventsListComponent);

  beforeEach(() => spectator = createComponent({
    props: {
      eventsList: [
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
  }));

  it('Should create', () => {
    expect(spectator.component).toBeTruthy;
  })

  it('Should show the events list', () => {
    expect(spectator.queryAll('mat-list-item').length).toBe(3);
  })

});
