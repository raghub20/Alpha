import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfileComponent } from './candidate-profile.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import  { CandidateProfilesService } from '../../../core/services/candidate-profiles.service';

describe('CandidateProfileComponent', () => {
  let component: CandidateProfileComponent;
  let fixture: ComponentFixture<CandidateProfileComponent>;

  let service: CandidateProfilesService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterTestingModule ],
      declarations: [ CandidateProfileComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateProfileComponent);
    component = fixture.componentInstance;
    service = new CandidateProfilesService();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page heading as Candidates in a h1 tag', () => {
    const hTag = fixture.nativeElement.querySelector('h2');
    expect(hTag.innerHTML).toContain('Candidates');
});

  it('should have search for table', () => {
    const tableSearch = fixture.debugElement.query(By.css('.search-box'));
    expect(tableSearch).toBeTruthy();
  });

  it('should call the filter method when user types in the search field', function () {
    spyOn(component, 'filterResults');
    const search_text = fixture.debugElement.query(By.css('#search_text')).nativeElement;
    const event = new KeyboardEvent('keyup');
    search_text.value = 'Matthew';
    search_text.dispatchEvent(event);
    expect(search_text).not.toBe('');
    fixture.detectChanges();
    expect(component.filterResults).toHaveBeenCalledTimes(1);
  });

  it('should have material view_column icon for selecting columns', () => {
    const Column = fixture.debugElement.query(By.css('.viewsetting-icon'));
    expect(Column).toBeTruthy();
  });

  it('should open Select Columns modal when clicked on view column icon', () => {
    spyOn(component, 'openModal');
    const view_column = fixture.debugElement.query(By.css('#view_column')).nativeElement;
    view_column.click();
    fixture.detectChanges();
    expect(component.openModal).toHaveBeenCalledTimes(1);
  });

  it('should have button to add candidate', () => {
    const Column = fixture.debugElement.query(By.css('#add_button'));
    expect(Column).toBeTruthy();
  });

  it('should display material add icon', () => {
    const add_icon = fixture.debugElement.query(By.css('#add_icon')).nativeElement;
    fixture.detectChanges();
    expect(add_icon).toBeTruthy();
  });

  it('should open Add Candidate modal when clicked on Add Button', () => {
    spyOn(component, 'openDialog');
    const add_button = fixture.debugElement.query(By.css('#add_button')).nativeElement;
    add_button.click();
    fixture.detectChanges();
    expect(component.openDialog).toHaveBeenCalledTimes(1);
  });

  it('should check if the date format is YYYY-MM-DD', async () => {
    const tableBody  = <HTMLElement[]>fixture.nativeElement.querySelectorAll('tbody');
    const dataRows = tableBody[0].querySelectorAll('tr');
    const date = dataRows[4].querySelectorAll('td');
    fixture.detectChanges();
    expect(service.verifyDate(date)).toBe(true);
  });

  it('should be hidden clearSearch icon', () => {
    const clear_search = fixture.debugElement.query(By.css('#clear_search'));
    expect(clear_search).toBeFalsy();
  });
});
