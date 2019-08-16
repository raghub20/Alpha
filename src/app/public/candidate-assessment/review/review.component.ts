import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CandidateNeedsAssessment, FamilyDetails, ResidenceDetails } from 'src/app/core/models/candidateneeds-assessment.model';
import { CandidateNeedsAssessmentService } from '../../../core/services/candidateneeds-assessment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { AppDateAdapter } from 'src/app/core/models/date-adapter';
import { DatePipe } from '@angular/common';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { Address } from './../../../core/models/address.model';
/**
 * To store the errormessages
 */
export const errorMessages: { [key: string]: string } = {
  Contact: 'You must enter preferred contact number'
};
/**
 * to store date formats
 */
export const APP_DATE_FORMATS =
{
  parse: {
    dateInput: { month: 'numeric', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
  }
};
/**
 * To review and submit
 */
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }]
})
export class ReviewComponent implements OnInit {
  /**
   * Assigned var to number
   */
  count: number;
  /**
  * Variable declared with alias
  */
  candidateAssessment: CandidateNeedsAssessment = {} as CandidateNeedsAssessment;
  /**
* Getting input from parent component
*/
  @Input() needsAssessment: CandidateNeedsAssessment;
  /**
   * Variable declared with alias
   */
  AssessmentDetails: CandidateNeedsAssessment = {} as CandidateNeedsAssessment;
  /**
  * Assigned var to string
  */
  address: string[];
  /**
  * Assigned form name
  */
  ReviewForm: FormGroup;
  /**
  * Assigned var to boolean
  */
  submitStatus: boolean;
  /**
  * Assigned var to string
  */
  date: String;
  /**
  * Assigned errorMessages to errors
  */
  errors = errorMessages;
  /**
   * 
   * @param formBuilder - Formbuilder name
   * @param cityService - cityservice
   * @param notificationsService -notification service
   * @param datePipe -datepipe
   */
  constructor(private formBuilder: FormBuilder, private cityService: CandidateNeedsAssessmentService,
    private notificationsService: NotificationsService, private datePipe: DatePipe) {
    /**
     * To check for the required field validators
     */
    this.ReviewForm = this.formBuilder.group({
      Relocate: ['', Validators.required],
      RelocatePeopleCount: ['', Validators.required],
      Address: ['', Validators.required],
      Destination: ['', Validators.required],
      OwnerStatus: ['', Validators.required],
      HomeType: ['', Validators.required],
      Contact: ['', Validators.required],
      Date: ['', Validators.required],
      Count: ['', Validators.required]
    });

  }
  /**
     * Intialising the value which has been selected
     */
  ngOnInit() {

    this.AssessmentDetails.familyDetails = {} as FamilyDetails;
    this.AssessmentDetails.residenceDetails = {} as ResidenceDetails;
    this.AssessmentDetails.departureAddr = {} as Address;
    this.needsAssessment.departureAddr.fullAddress = this.needsAssessment.departureAddr.streetAddress.concat(',').concat(
      this.needsAssessment.departureAddr.town).concat(',').concat(this.needsAssessment.departureAddr.state).concat(',').concat(this.needsAssessment.departureAddr.zip);

    this.ReviewForm.get('Relocate').setValue(this.needsAssessment.familyDetails.relocationStatus);
    this.ReviewForm.get('RelocatePeopleCount').setValue(this.needsAssessment.familyDetails.noOfRelocatePeople);
    this.ReviewForm.get('Address').setValue(this.needsAssessment.departureAddr.fullAddress);
    this.ReviewForm.get('Destination').setValue(this.needsAssessment.destinationCity);
    this.ReviewForm.get('OwnerStatus').setValue(this.needsAssessment.residenceDetails.ownerStatus);
    this.ReviewForm.get('HomeType').setValue(this.needsAssessment.residenceDetails.homeType);
    this.ReviewForm.get('Count').setValue(this.needsAssessment.residenceDetails.noOfRooms);
    this.count = this.needsAssessment.residenceDetails.noOfRooms;
    this.ReviewForm.disable();
    this.ReviewForm.get('Date').enable();
  }
  /**
  * Increment onclick
  */
  incNum() {
    /**check the condition */
    if (this.count < 3) {
      this.count = this.count + 1;
      this.ReviewForm.get('Count').setValue(this.count);
    }
  }
  /**
  * decrement onclick
  */
  decNum() {
    /**check the condition */
    if (this.count > 1) {
      this.count = this.count - 1;
      this.ReviewForm.get('Count').setValue(this.count);
    }
  }
  /**
 * @param form submitting the form
 * storing the formvalue and sending the details to service on submitting the form
 */
  submit(form: FormGroup) {
    this.AssessmentDetails.familyDetails.relocationStatus = form.get('Relocate').value;
    this.AssessmentDetails.familyDetails.noOfRelocatePeople = form.get('RelocatePeopleCount').value;
    this.AssessmentDetails.departureAddr.streetAddress = form.get('Address').value.split(',')[0];
    this.AssessmentDetails.departureAddr.town = form.get('Address').value.split(',')[1];
    this.AssessmentDetails.departureAddr.state = form.get('Address').value.split(',')[2];
    this.AssessmentDetails.departureAddr.zip = form.get('Address').value.split(',')[3];
    this.AssessmentDetails.destinationCity = form.get('Destination').value;
    this.AssessmentDetails.residenceDetails.ownerStatus = form.get('OwnerStatus').value;
    this.AssessmentDetails.residenceDetails.homeType = form.get('HomeType').value;
    this.AssessmentDetails.residenceDetails.noOfRooms = form.get('Count').value;
    this.AssessmentDetails.contactNumber = form.get('Contact').value;
    this.date = form.get('Date').value;
    this.AssessmentDetails.estimatedMoveDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');

    this.submitStatus = this.cityService.addCandidateAssessmentDetails(this.AssessmentDetails);
    /**display the success message based on successful submission of data */
    (this.submitStatus === true) ?
      this.notificationsService.flashNotification('success', 'Thank you for completing the Needs Assessment. We will alert you when your relocation package is ready', true, 'dismiss') :
      this.notificationsService.flashNotification('Failed', 'Unable to add details', false, 'dismiss');

  }
  /**
   * 
   * @param formControlName -argument passed to specify which field should be able to edit
   * Edit the field on click of edit icon
   */
  edit(formControlName) {
    this.ReviewForm.get(formControlName).enable();
  }
  /**
   * @param formControlName - argument passed to take the control from the field
   * function for onblur when control is taken from the field
   * 
   */
  onBlurMethod(formControlName) {
    this.ReviewForm.get(formControlName).disable();
  }
}
