import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidateProfilesService } from '../../../../core/services/candidate-profiles.service';
import { AddCandidateComponent } from './add-edit-budget.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import {
  MatFormFieldModule, MatInputModule, MatMenuModule, MatButtonModule, MatSidenavModule,
  MatExpansionModule, MatIconModule, MatCheckboxModule, MatDialogModule, MatSelectModule, MatAutocompleteModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Candidate } from '../../../../core/models/candidate';
import { RouterTestingModule } from '@angular/router/testing';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';

describe('AddCandidateComponent', () => {
  let component: AddCandidateComponent;
  let fixture: ComponentFixture<AddCandidateComponent>;
  let el: HTMLElement;
  let debugel: DebugElement[];
  const model: Candidate = {
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
  const dialogMock = {
    close: () => { }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidateComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatExpansionModule,
        MatIconModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatAutocompleteModule,
        MaterialModule,
        RouterTestingModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidateComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('variables', () => {
    expect(component.addCandidateForm).toBeDefined();
    // expect(component.data).toBeDefined();
    expect(component.errors).toBeDefined();
    expect(component.mode).toBeDefined();
    expect(component.formReady).toBe(false);
    expect(component.levels).toBeDefined();
    expect(component.options).toBeDefined();
    expect(component.departures).toBeDefined();
    expect(component.destinations).toBeDefined();
    // expect(component.addCandidateForm.controls['level']).toBe('Level 1 (salary $250,000+)');
  });
  it('should create a form with these ', () => {
    expect(component.addCandidateForm.contains('FirstName')).toBeTruthy();
    expect(component.addCandidateForm.contains('LastName')).toBeTruthy();
    expect(component.addCandidateForm.contains('Email')).toBeTruthy();
    expect(component.addCandidateForm.contains('Level')).toBeTruthy();
    expect(component.addCandidateForm.contains('Departure')).toBeTruthy();
    expect(component.addCandidateForm.contains('Destination')).toBeTruthy();
  });
  it('should make first name required', () => {
    const control = component.addCandidateForm.get('FirstName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should make last name required', () => {
    const control = component.addCandidateForm.get('LastName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should return email ID', () => {
    const control = component.addCandidateForm.get('Email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should return level', () => {
    const control = component.addCandidateForm.get('Level');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should set destination to check filter', () => {
    const control = component.addCandidateForm.get('Departure');
    control.setValue('TX');
    expect(component.departures).not.toBeNull();
  });
  it('should set destination to check filter', () => {
    const control = component.addCandidateForm.get('Destination');
    control.setValue('TX');
    expect(component.destinations).not.toBeNull();
  });
  it('should check whether error message is called when giving invaild data', () => {
    const spy = spyOn(component, 'getErrorMessage').and.callThrough();
    const control = component.addCandidateForm.get('FirstName');
    control.setValue('');
    // console.log(spy);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();

  });
  it('should call sendInvite method', async(() => {
    spyOn(component, 'sendInvite');
    el = fixture.debugElement.query(By.css('#addEditSendInvite')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.sendInvite).toHaveBeenCalledTimes(1);
  }));

  it('should call update method', async(() => {
    // spyOn(component, 'updateCandidateAssessment');
    // const updateButton = fixture.debugElement.query(By.css('#updateCandidateAssessment')).nativeElement;
    // updateButton.click();
    // fixture.detectChanges();
    // expect(component.updateCandidateAssessment).toHaveBeenCalledTimes(1);
    fixture.autoDetectChanges(true);
    fixture.whenStable().then(() => {
      const form = fixture.componentInstance.addCandidateForm;
      expect(form.pristine).toBeTruthy();
      form.controls['BusinessUnit'].setValue('Marketing');
      expect(form.pristine).toBeTruthy('because the form is no longer pristine after business unit has been updated');
    });
  }));


  it('should call onNoClick on cancel method', async(() => {
    spyOn(component, 'onNoClick');
    el = fixture.debugElement.query(By.css('#cancel')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.onNoClick).toHaveBeenCalledTimes(1);
  }));


  it('should call saveDraft method on click of save draft', async(() => {

    spyOn(component, 'saveDraft');
    el = fixture.debugElement.query(By.css('#addEditSave')).nativeElement;
    el.click();
    expect(component.saveDraft).toHaveBeenCalledTimes(1);
  }));

  

  it('should close dialog once clicked onNoClick', () => {
    const spy = spyOn(component, 'onNoClick').and.callThrough();
    component.onNoClick();
    expect(spy).toHaveBeenCalled();
  });

    it('should check whether the table is populated', () => {

      fixture.whenStable().then(() => {
        const data = fixture.debugElement.queryAll(By.css('input'));
        const firstname = data[0].nativeElement;
        expect(firstname.value).toBe('Maturity');
        const lastname = data[1].nativeElement;
        expect(lastname.value).toBe('Matthew');
        const email = data[2].nativeElement;
        expect(email.value).toBe('mathew.maturity@gmail.com');
        const bussinessunit = data[3].nativeElement;
        expect(bussinessunit.value).toBe('Human Resources');
        const departure = data[4].nativeElement;
        expect(departure.value).toBe('NJ, Nutley');
        const destination = data[5].nativeElement;
        expect(destination.value).toBe('TX, Austin');
        const option = fixture.debugElement.query(By.css('.mat-select-value')).nativeElement;
        const matSelectValueObject: HTMLElement = fixture.debugElement.query(By.css('.mat-select-value')).nativeElement;
        fixture.detectChanges();
        const innerSpan = matSelectValueObject.children[0].children[0]; // for getting the inner span
        expect(innerSpan.innerHTML).toBe('Level 2 (100,001 to 250,000 USD)');
      });
    });
    it('should check whether getErrorMessage Firstname field is called' , () => {
      const control = component.addCandidateForm.get('FirstName');
      control.setValue('');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('FIRST_NAME');
      expect(spy).toHaveBeenCalled();
    });
    it('should check whether getErrorMessage Firstname field is validated for special characters' , () => {
      const control = component.addCandidateForm.get('FirstName');
      control.setValue('Abi@');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('FIRST_NAME');
      expect(spy).toHaveBeenCalled();
    });
    it('should check whether getErrorMessage Lastname field is called' , () => {
      const control = component.addCandidateForm.get('LastName');
      control.setValue('');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('LAST_NAME');
      expect(spy).toHaveBeenCalled();
    });
    it('should check whether getErrorMessage Lastname field is validated for special character' , () => {
      const control = component.addCandidateForm.get('LastName');
      control.setValue('Abi@');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('LAST_NAME');
      expect(spy).toHaveBeenCalled();
    });
    it('should check whether getErrorMessage email field is called' , () => {
      const control = component.addCandidateForm.get('Email');
      control.setValue('');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('EMAIL');
      expect(spy).toHaveBeenCalled();
     });
    it('should check whether getErrorMessage email field is called' , () => {
      const control = component.addCandidateForm.get('Email');
      control.setValue('abc');
      const spy = spyOn(component, 'getErrorMessage').and.callThrough();
      component.getErrorMessage('EMAIL');
      expect(spy).toHaveBeenCalled();
    });
    
  // it('should check whether getErrorMessage Firstname field is called', () => {
  //   const control = component.addCandidateForm.get('FirstName');
  //   control.setValue('');
  //   const spy = spyOn(component, 'getErrorMessage').and.callThrough();
  //   component.getErrorMessage('FIRST_NAME');
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should check whether getErrorMessage Firstname field is validated for special characters', () => {
  //   const control = component.addCandidateForm.get('FirstName');
  //   control.setValue('Abi@');
  //   const spy = spyOn(component, 'getErrorMessage').and.callThrough();
  //   component.getErrorMessage('FIRST_NAME');
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should check whether getErrorMessage Lastname field is called', () => {
  //   const control = component.addCandidateForm.get('LastName');
  //   control.setValue('');
  //   const spy = spyOn(component, 'getErrorMessage').and.callThrough();
  //   component.getErrorMessage('LAST_NAME');
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should check whether getErrorMessage Lastname field is validated for special character', () => {
  //   const control = component.addCandidateForm.get('LastName');
  //   control.setValue('Abi@');
  //   const spy = spyOn(component, 'getErrorMessage').and.callThrough();
  //   component.getErrorMessage('LAST_NAME');
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should check whether getErrorMessage email field is called', () => {
  //   const control = component.addCandidateForm.get('Email');
  //   control.setValue('');
  //   const spy = spyOn(component, 'getErrorMessage').and.callThrough();
  //   component.getErrorMessage('EMAIL');
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should check whether getErrorMessage email field is called', () => {
  //   const control = component.addCandidateForm.get('Email');
  //   control.setValue('abc');
  //   const spy = spyOn(component, 'getErrorMessage').and.callThrough();
  //   component.getErrorMessage('EMAIL');
  //   expect(spy).toHaveBeenCalled();
  // });
  it ('should check buttons are rendered based on conditions', () => {
    expect(fixture.debugElement.query(By.css('#addEditSave')).nativeElement).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#addEditSendInvite')).nativeElement).toBeTruthy();

  });
});

describe("Transferre Data for Ready for Review", function () {
  let component: AddCandidateComponent;
  let fixture: ComponentFixture<AddCandidateComponent>;
  let el: HTMLElement;
  let debugel: DebugElement;
  const modelData: Candidate = {
    candidateId: '2222',
    fullname: 'Beal, Christopher',
    level: {
      levelId: 'level1',
      levelName: 'Level 1 (250,000+ USD)',
      levelDescription: 'Level 1 - Salary details'
    },
    departure: 'GA, Atlanta',
    destination: 'TX, Dallas',
    status: 'Ready for Review',
    isAssessmentReceived: true,
    emailAddress: 'chris.beal@gmail.com',
    businessUnit: 'Finance',
    invitationSentDate: '9-APR-19',
    createdDate: '9-APR-19',
    createdBy: 'Matthew, Maturity',
    lastUpdatedDate: '2-MAY-19',
    streetAddress: '41 Apple Ridge Rd',
    city: 'Danbury',
    state: 'CT',
    zipcode: '06810',
    noOfRooms: '4',
    housingType: 'Rents Apartment',
    noOfChildren: '3',
    total: '5'
  };
  const dialogMock = {
    close: () => { }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidateComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatExpansionModule,
        MatIconModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatAutocompleteModule,
        MaterialModule,
        RouterTestingModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: modelData
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidateComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should check whether checkbox is working', () => {
    const spy = spyOn(component, 'taxChkBoxSelect').and.callThrough();
    debugel = fixture.debugElement.query(By.css('mat-checkbox'));
    el = debugel.nativeElement;
    expect(component.taxValChkBox).toBe(true);
    el.click();
    el.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.taxValChkBox).toBe(false);
    el.click();
    el.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.taxValChkBox).toBe(true);
    expect(spy).toHaveBeenCalled();
  });

  it ('should check buttons are rendered based on conditions', () => {
    expect(fixture.debugElement.query(By.css('#show')).nativeElement).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#cancel')).nativeElement).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#invite')).nativeElement).toBeTruthy();
        
  });

});

describe("Transferre Data for Pending Vanline Quote", function () {
  let component: AddCandidateComponent;
  let fixture: ComponentFixture<AddCandidateComponent>;
  let el: HTMLElement;
  let debugel: DebugElement;
  const sampleMock: Candidate = {
    candidateId: '3333',
    fullname: 'Beal, Christopher',
      level: {
        levelId: 'level1',
        levelName: 'Level 1 (250,000+ USD)',
        levelDescription: 'Level 1 - Salary details'
      },
      departure: 'GA, Atlanta',
      destination: 'TX, Dallas',
      status: 'Pending Vanline Quote',
      isAssessmentReceived: true,
      emailAddress: 'chris.beal@gmail.com',
      businessUnit: 'Finance',
      invitationSentDate: '9-APR-2019',
      createdDate: '9-APR-19',
      createdBy: 'Matthew, Maturity',
      lastUpdatedDate: '2-MAY-19',
      streetAddress: '41 Apple Ridge Rd',
      city: 'Danbury',
      state: 'CT',
      zipcode: '06810',
      noOfRooms: '4',
      housingType: 'Rents Apartment',
      noOfChildren: '3',
      total: '5'

  };
  const dialogMock = {
    close: () => { }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidateComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatExpansionModule,
        MatIconModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatAutocompleteModule,
        MaterialModule,
        RouterTestingModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: sampleMock
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidateComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should check for Pending Vanline Quote Status', () => {
    expect(component.btnChangeFlag).toBe(true);
  });

  // it ('should check buttons are rendered based on conditions', () => {   
  //   expect(fixture.debugElement.query(By.css('#cancel')).nativeElement).toBeTruthy();
  //   expect(fixture.debugElement.query(By.css('#updateCandidateAssessment')).nativeElement).toBeTruthy(); 
  // });

  it('should check whether the form is populated', () => {
    fixture.whenStable().then(() => {
      const data = fixture.debugElement.queryAll(By.css('input'));
      const firstname = data[0].nativeElement;
      expect(firstname.value).toBe('Christopher');
      const lastname = data[1].nativeElement;
      expect(lastname.value).toBe('Beal');
      const email = data[2].nativeElement;
      expect(email.value).toBe('chris.beal@gmail.com');
      const bussinessunit = data[3].nativeElement;
      expect(bussinessunit.value).toBe('Finance');
      const departure = data[4].nativeElement;
      expect(departure.value).toBe('GA, Atlanta');
      const destination = data[5].nativeElement;
      expect(destination.value).toBe('TX, Dallas');
      // const option = fixture.debugElement.query(By.css('.mat-select-value')).nativeElement;
      const matSelectValueObject: HTMLElement = fixture.debugElement.query(By.css('.mat-select-value')).nativeElement;
      fixture.detectChanges();
      const innerSpan = matSelectValueObject.children[0].children[0]; // for getting the inner span
      expect(innerSpan.innerHTML).toBe('Level 1 (250,000+ USD)');

      const matCardAddressObject: HTMLElement = fixture.debugElement.query(By.css('.address-container')).nativeElement;
      const addressObjectStreet = matCardAddressObject.children[0].children[0].children[2];
      expect(addressObjectStreet.innerHTML).toBe(' 41 Apple Ridge Rd ');

      const addressObjectCityStateZipcode = matCardAddressObject.children[0].children[0].children[3];
      expect(addressObjectCityStateZipcode.innerHTML).toBe(' Danbury, CT 06810 ');

      const matCardHousingObject: HTMLElement = fixture.debugElement.query(By.css('.housing-container')).nativeElement;
      const housingObjectStreet = matCardHousingObject.children[0].children[0].children[2];
      expect(housingObjectStreet.innerHTML).toBe('# of Rooms: 4 ');

      const housingObjectCityStateZipcode = matCardHousingObject.children[0].children[0].children[3];
      expect(housingObjectCityStateZipcode.innerHTML).toBe(' Rents Apartment ');

      const matCardPeopleObject: HTMLElement = fixture.debugElement.query(By.css('.people-container')).nativeElement;
      const peopleObjectStreet = matCardPeopleObject.children[0].children[0].children[2];
      expect(peopleObjectStreet.innerHTML).toBe(' 3 Children');

      const peopleObjectCityStateZipcode = matCardPeopleObject.children[0].children[0].children[3];
      expect(peopleObjectCityStateZipcode.innerHTML).toBe(' 5 Total');
    });
  });
});
