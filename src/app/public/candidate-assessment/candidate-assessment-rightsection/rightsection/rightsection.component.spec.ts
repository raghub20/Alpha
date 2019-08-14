import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsectionComponent } from './rightsection.component';

describe('RightsectionComponent', () => {
  let component: RightsectionComponent;
  let fixture: ComponentFixture<RightsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
