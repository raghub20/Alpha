import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfRoomsComponent } from './number-of-rooms.component';

describe('NumberOfRoomsComponent', () => {
  let component: NumberOfRoomsComponent;
  let fixture: ComponentFixture<NumberOfRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberOfRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
