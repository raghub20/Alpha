import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfHomeComponent } from './type-of-home.component';

describe('TypeOfHomeComponent', () => {
  let component: TypeOfHomeComponent;
  let fixture: ComponentFixture<TypeOfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
