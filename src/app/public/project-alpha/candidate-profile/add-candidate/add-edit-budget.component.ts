import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CandidateProfilesService } from '../../../../core/services/candidate-profiles.service';
import { LocationService } from '../../../../core/services/location.service';
import { LevelService } from '../../../../core/services/level.service';

import { Candidate, statusType } from '../../../../core/models/candidate';
import { Location } from '../../../../core/models/location';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CandidateBudget } from './../../../../core/models/candidate-budget.model';
import { Level } from 'src/app/core/models/level';
/**
 * Exporting the errormessages
 */
export const errorMessages: { [key: string]: string } = {
  Email: 'You must enter Email address',
  Destination: 'You must select destination',
  Level: 'You must select level'
};

/**
 * Add component for candidate
 */
@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-edit-budget.component.html',
  styleUrls: ['./add-edit-budget.component.scss']
})
export class AddCandidateComponent implements OnInit {
  /**Form group name */
  addCandidateForm: FormGroup;
  /** Title to display the dialog window page title */
  title: string;
  /**Flag mode for Create */
  mode: string;
  /**Assign formready Variable as False */
  formReady: boolean;
  /**Binding the dropdown values to level filed */
  levels: Level[];
  /** auto complete values for destination */
  options: Location[];
  /**variable declared for  tax value checkbox change */
  taxValChkBox: boolean;
  /**variable declared for totalcost */
  totalCost: number;
  /**variable declared for modal popup component reuse */
  transferreFlag: boolean;
  /**variable declared to load buttons based on status */
  btnChangeFlag: boolean;
  /**variable declared for totalrecommendbudget */
 // totalBudgetAmt: number;

  /**variable declared for tax value */
  taxValue: number;
  showServices = false;
  readOnlyField = false;
  /* Enable/Disable Update Button */
  isDirty = true;
  isFirstNameField = true;
  isLastNameField = true;
  isbusinessUnitField = true;

  /**Variables for error */
  errors = errorMessages;
  /** variable declared for depature */
  departures: Observable<Location[]>;
  /** variable declared for destinations */
  destinations: Observable<Location[]>;
  /**variable declared for enum values */
  statusOftype = statusType;
  /** Object for AddEditBudget Model */
  candidateBudgetModel: CandidateBudget = {} as CandidateBudget;
  showAssessment = false;
  /**
   * Initializes form elements
   * @param formBuilder - property for form elements
   * @param dialogRef - property for mat dialog reference
   * @param data - contains popup data
   * @param candidateProfilesService - service parameter
   * @param locationService - loads location details
   * @param levelService - fetches level details
   * @param changeDetectorRef - property for change detections
   */
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Candidate,
    private candidateProfilesService: CandidateProfilesService,
    private locationService: LocationService,
    private levelService: LevelService,
    private changeDetectorRef: ChangeDetectorRef) {

    this.mode = 'create';
    this.formReady = false;
    /* Setting default title of the dialof window */
    this.title = 'Add Candidate';

    /* Get all the locations for destination and departure */
    this.options = this.locationService.getLocations();

    /* Get all the level details */
    this.levels = this.levelService.getLevels();

    this.readOnlyField = false;

    this.candidateBudgetModel = (this.data != null) ? this.candidateProfilesService.getCandidateBudgetDetails(this.data.candidateId) : null;

    /* Create the Add/Edit dialog window */
    this.addCandidateForm = this.formBuilder.group({
      FirstName: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z A-Z0-9-`]*$')]
      )],
      LastName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
        Validators.pattern('^[a-z A-Z0-9-`]*$')]
      )],
      Email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      )],
      Level: ['', Validators.required],
      Departure: [''],
      BusinessUnit: [''],
      Destination: ['', Validators.required]
    });

    /* If the data is present - it will open and pre-populate dialog window */
    if (this.data) {

      this.showAssessment = this.data.isAssessmentReceived;
      /* set page title to edit candidate or transferee assessment*/
      if (this.data.isAssessmentReceived) {
        //this.addEditBudgetModel.title = 'Recommended Budget';
        if (this.data.status === this.statusOftype.pendingVanline) {
          this.title = 'Candidate Assessment';
          this.readOnlyField = true;
        } else {
          this.title = 'Recommended Budget';
        }
      } else {
        this.title = 'Edit Candidate';
      }
      /** storing the service details*/

      if (this.candidateBudgetModel && this.candidateBudgetModel.service.length > 0) {
        this.showServices = true;
        this.readOnlyField = true;
        this.totalCost = this.candidateBudgetModel.totalCostAmt;
        this.taxValue = this.candidateBudgetModel.taxAmt;
      }

      /**
       * Assigning the recommended budget and cost
       */
     // this.totalBudgetAmt = this.candidateBudgetModel.totalRecomBudgetAmt;
     
      /* Setting the default values for form elements in edit candidate dialog */
      this.addCandidateForm.get('FirstName').setValue(this.data.fullname.substr(data.fullname.indexOf(',') + 2, data.fullname.length));
      this.addCandidateForm.get('LastName').setValue(this.data.fullname.substr(0, data.fullname.indexOf(',')));
      this.addCandidateForm.get('Destination').setValue(this.data.destination);
      this.addCandidateForm.get('Departure').setValue(this.data.departure);
      this.addCandidateForm.get('Email').setValue(this.data.emailAddress);
      this.addCandidateForm.get('BusinessUnit').setValue(this.data.businessUnit);
      this.addCandidateForm.get('Level').setValue(this.data.level.levelName);
    }

    /* Enable the event listener for departure drop down form element */
    this.departures = this.addCandidateForm.get('Departure').valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    /* Enable the event listener for the destination drop down form element */
    this.destinations = this.addCandidateForm.get('Destination').valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }


  /* On change input fields (First Name, Last Name, Business Unit) - Enable Update Button */
  changeField(event, field) {
    if ((this.data.status === this.statusOftype.pendingVanline) || (this.candidateBudgetModel && 
      this.candidateBudgetModel.service.length > 0)) {
      console.log('enter');
      if (this.addCandidateForm.valid) {
        switch (field) {
          case 'firstName': {
            if (this.data.fullname.substr(this.data.fullname.indexOf(',') + 2, this.data.fullname.length) === event) {
              this.isFirstNameField = true;
            } else {
              this.isFirstNameField = false;
            }
            break;
          }
          case 'lastName': {
            if (this.data.fullname.substr(0, this.data.fullname.indexOf(',')) === event) {
              this.isLastNameField = true;
            } else {
              this.isLastNameField = false;
            }
            break;
          }
          case 'businessUnit': {
            if (this.data.businessUnit === event) {
              this.isbusinessUnitField = true;
            } else {
              this.isbusinessUnitField = false;
            }
            break;
          }
        }
        this.isDirty = (this.isFirstNameField && this.isLastNameField && this.isbusinessUnitField);
      } else {
        this.isDirty = true;
      }
    }
  }
  /**
   * On Page load, sets the flag to show appropriate buttons based on status
   */
  ngOnInit() {
    this.taxValChkBox = true;
    this.totalCost = this.taxValue + this.totalCost;
    // tslint:disable-next-line: max-line-length
    if (this.data != null) {
      this.transferreFlag = ((this.data.status === this.statusOftype.pendingVanline) || (this.data.status === this.statusOftype.readyForReview)) ? true : false;
      this.btnChangeFlag = (this.statusOftype.readyForReview === this.data.status) ? false : true;
    }
  }
  /**
   *  Modified incoming value to lowerCase and assigned to const variable filterValue
   * @param value - start character for filter values
   */
  private _filter(value: string): Location[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  /**
   * Click on Submit button inside the addCandidateForm dialog window
   */
  sendInvite() {
    const levelDetails = this.levelService.getLevelId(this.addCandidateForm.value.Level);
    if (this.data){
      this.transferreFlag = ((this.data.status === this.statusOftype.pendingVanline) || (this.data.status === this.statusOftype.readyForReview)) ? true : false;
      this.btnChangeFlag = (this.statusOftype.readyForReview === this.data.status) ? false : true;
      this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, true, this.data.candidateId);
    } else {
      this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, true, undefined);
    }
    
    this.dialogRef.close();
  }
  /**
   * Click on Save Draft button inside the addCandidateForm dialog window
   */
  saveDraft() {
    var levelDetails = this.levelService.getLevelId(this.addCandidateForm.value.Level);

    if (this.data) {
      if (this.data.invitationSentDate == '' || this.data.invitationSentDate === null) {
        this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, false, this.data.candidateId);
      } else {
        this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, true, this.data.candidateId);
      }
    } else {
      this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, false, undefined);
    }
    this.dialogRef.close();
  }
  /**
   * Closing the dialog box - we are setting the form to empty
   */
  onNoClick(): void {
    this.dialogRef.close();
    this.addCandidateForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required, Validators.minLength(1), Validators.maxLength(30)],
      Email: ['', Validators.required, Validators.email],
      Departure: [''],
      BusinessUnit: [''],
      Destination: ['', Validators.required],
    });
  }
  /**
   * Custom error messages for Firstname, lastname and Email to verify special character or empty errors
   * @param field_name - field parameter to check for errors
   */
  getErrorMessage(field_name) {
    if (field_name === 'FIRST_NAME') {
      return this.addCandidateForm.get('FirstName').hasError('required') ? 'You must enter first name' :
        this.addCandidateForm.get('FirstName').hasError('pattern') ? 'Special characters are not allowed' : '';
    }
    if (field_name === 'LAST_NAME') {
      return this.addCandidateForm.get('LastName').hasError('required') ? 'You must enter last name' :
        this.addCandidateForm.get('LastName').hasError('pattern') ? 'Special characters are not allowed' : '';
    }
    if (field_name === 'EMAIL') {
      return this.addCandidateForm.get('Email').hasError('required') ? 'You must enter email address' :
        this.addCandidateForm.get('Email').hasError('pattern') ? 'You must enter a valid email address' : '';
    }
  }
  /**
   * Calculates the tax amount and updates total cost
   * @param value - Holds the check box value
   */
  taxChkBoxSelect(value) {
    this.taxValChkBox = !value;
    if (this.taxValChkBox === true) {
      this.taxValue = this.candidateBudgetModel.taxAmt;
      this.totalCost = this.candidateProfilesService.calcTaxAssistance(this.candidateBudgetModel);
    } else {
      this.taxValue = null;
      this.totalCost = this.candidateBudgetModel.totalRecomBudgetAmt;
    }
  }

  updateCandidateAssessment() {
    const firstName = this.addCandidateForm.get('FirstName');
    const lastName = this.addCandidateForm.get('LastName');
    const businessUnit = this.addCandidateForm.get('BusinessUnit');
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(businessUnit.value);
    const levelDetails = this.levelService.getLevelId(this.addCandidateForm.value.Level);
    if (this.data) {
      if (!(this.data.invitationSentDate === '' || this.data.invitationSentDate === null)) {
        this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, false, this.data.candidateId);
      } else {
        this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, true, this.data.candidateId);
      }
    } else {
      this.candidateProfilesService.addCandidateProfile(this.addCandidateForm.value, levelDetails, false, undefined);
    }
    console.log(this.addCandidateForm.value);
    this.dialogRef.close();
  }

}
