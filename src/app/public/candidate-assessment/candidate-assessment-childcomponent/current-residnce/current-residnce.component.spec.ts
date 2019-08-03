import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentResidnceComponent } from './current-residnce.component';

describe('CurrentResidnceComponent', () => {
  let component: CurrentResidnceComponent;
  let fixture: ComponentFixture<CurrentResidnceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentResidnceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentResidnceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
