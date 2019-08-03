import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleRelocationComponent } from './people-relocation.component';

describe('PeopleRelocationComponent', () => {
  let component: PeopleRelocationComponent;
  let fixture: ComponentFixture<PeopleRelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleRelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleRelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
