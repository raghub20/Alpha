import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocationComponent } from './relocation.component';

describe('RelocationComponent', () => {
  let component: RelocationComponent;
  let fixture: ComponentFixture<RelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
