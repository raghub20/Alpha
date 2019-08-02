import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailsComponent } from './candidate-details.component';
import { MaterialModule } from 'src/app/material/material.module';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HighlightSearchPipe } from '../../highlight-search.pipe';
import { By } from '@angular/platform-browser';
import { MatTableModule, MatAutocompleteModule } from '@angular/material';
import { Candidate } from 'src/app/core/models/candidate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCandidateComponent } from '../add-candidate/add-edit-budget.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CandidateDetailsComponent', () => {
  let component: CandidateDetailsComponent;
  let fixture: ComponentFixture<CandidateDetailsComponent>;
  const data: Candidate = {
    candidateId: '1111',
    fullname: 'Matthew, Maturity',
    level: {
      levelId: 'level2',
      levelName: 'Level 2 (100,001 to 250,000 USD)',
      levelDescription: 'Level 2 - Salary details'
    },
    departure: 'NJ, Nutley',
    destination: 'TX, Austin',
    status: 'Invitation Not Sent',
    isAssessmentReceived: false,
    emailAddress: 'mathew.maturity@gmail.com',
    businessUnit: 'Human Resources',
    invitationSentDate: '21-JUN-19',
    createdDate: '21-JUN-19',
    createdBy: 'Matthew, Maturity',
    lastUpdatedDate: '21-JUN-19',
    streetAddress: '41 Apple Ridge Rd',
    city: 'Danbury',
    state: 'CT',
    zipcode: '06810',
    noOfRooms: '4',
    housingType: 'Rents Apartment',
    noOfChildren: '3',
    total: '5'

   
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule,MatTableModule,BrowserAnimationsModule, MatAutocompleteModule,
        FormsModule, ReactiveFormsModule

      ],
      declarations: [ CandidateDetailsComponent, HighlightSearchPipe ,AddCandidateComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ AddCandidateComponent ],
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on click of name call open method to open popup dialog',()=>{
    spyOn(component,'open');
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      let tableRows=fixture.nativeElement.querySelectorAll('tr');
      let row1=tableRows[1];
      row1.cells[1].click();
      expect(component.open).toHaveBeenCalledTimes(1);
    })

  });
  it('should check whether the method is getting called',()=>{
    const spy=spyOn(component,'open').and.callThrough();
    component.open(data);
  })

});
