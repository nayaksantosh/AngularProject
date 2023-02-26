import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcounterComponent } from './ticketcounter.component';

describe('TicketcounterComponent', () => {
  let component: TicketcounterComponent;
  let fixture: ComponentFixture<TicketcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketcounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
