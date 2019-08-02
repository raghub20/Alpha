import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, DebugNode } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthorizedMoveComponent } from './authorized-move.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HighlightSearchPipe } from '../highlight-search.pipe';
import { MatTableModule } from '@angular/material';
import { ApprovedMove } from '../../../core/models/approved-move';

describe('AuthorizedMoveComponent', () => {
  let component: AuthorizedMoveComponent;
  let fixture: ComponentFixture<AuthorizedMoveComponent>;
  let el: HTMLElement;
  
  const approvedMove: ApprovedMove = {
    'moveId': '21312',
      'candidate': {
        'candidateId': '1111',
      'fullname': 'Matthew, Maturity',
      'level': {
        'levelId': 'level2',
        'levelName': 'Level 2 (100,001 to 250,000 USD)',
        'levelDescription': 'Level 2 - Salary details'
      },
      'departure': 'NJ, Nutley',
      'destination': 'TX, Austin',
      'status': 'Invitation Not Sent',
      'isAssessmentReceived': false,
      'emailAddress': 'mathew.maturity@gmail.com',
      'businessUnit': 'Human Resources',
      'invitationSentDate': '21-JUN-19',
      'createdDate': '21-JUN-19',
      'createdBy': 'Matthew, Maturity',
      'lastUpdatedDate': '21-JUN-19',
      'streetAddress': '41 Apple Ridge Rd',
      'city': 'Danbury',
      'state': 'CT',
      'zipcode': '06810',
      'noOfRooms': '4',
      'housingType': 'Rents Apartment',
      'noOfChildren': '3',
      'total': '5'
    },
    'authorizedAmount': '75,000 USD',
    'spentAmount': '45,000 USD',
    'departure': 'NY, New York',
    'destination': 'NJ, Jersey City',
    'status': 'Authorized',
    'lastUpdateDate': '05/20/2019',
    'paymentReceived': 'YES',
    'authorizedBy': 'Tom Jefferson',
    'authorizedDate': '05/15/2019',
    'authorizedClientName': 'Starbucks',
    'createdBy': 'alpha_admin',
    'createdDate': '05/06/2019'

  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule,MatTableModule ],
      declarations: [ AuthorizedMoveComponent, HighlightSearchPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default 6 columns in the table', () => {
    const tableBody = fixture.nativeElement.querySelectorAll('table');
    const dataRows = tableBody[0].querySelectorAll('th');
    expect(dataRows.length).not.toBe(null);
    expect(dataRows.length).toBe(6); // 6 is the default display columns right now
  });

  it('should have 7 rows in the table', () => {
    const tableBody  = <HTMLElement[]>fixture.nativeElement.querySelectorAll('tbody');
    const dataRows = tableBody[0].querySelectorAll('tr');
    expect(dataRows.length).not.toBe(null);
    expect(dataRows.length).toBe(7); // total number of rows in the table
  });

  it('should show paginator', async () => {
    // find pager
    const pager = fixture.nativeElement.querySelectorAll('mat-paginator');
    expect(pager).toBeTruthy();
    
  });
  
});
