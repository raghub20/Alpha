import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateNeedsAssessment } from 'src/app/core/models/candidateneeds-assessment.model';
import { LocationService } from './../../../../core/services/location.service';
/**
 * To store the error message
 */
export const errorMessages: { [key: string]: string } = {
  /**variable to show error message */
  City: 'You must select city',
};
/**
 * Default city value
 */
const defaultCity: string = 'Danbury, CT';
/**
 * To display list of city details
 */
@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})

export class DestinationComponent implements OnInit {
  /**
   * Getting input from parent component
   */
  @Input() needsAssessment: CandidateNeedsAssessment;

  /**
   * Emitting the value from child to parent
   */
  @Output() notify: EventEmitter<CandidateNeedsAssessment> = new EventEmitter<CandidateNeedsAssessment>();

  /**
   * Form group name
  */
  DestinationAddressForm: FormGroup;

  /**
   * Storing the error messages
   */
  errors = errorMessages;

  /**
   * Binding the dropdown values to level field
  */
  cityList: Array<string>;

  /**
   * @param formBuilder - To add the formbuilder
   * @param cityService - To access the cityservice
   */
  /** * checking for the required field */
  constructor(
    private formBuilder: FormBuilder,
    private cityService: LocationService) {
    /**to validate the required field */
    this.DestinationAddressForm = this.formBuilder.group({
      City: ['', Validators.required]
    });
    /**to retrieve the value from sdrvice */
    this.cityList = this.cityService.getCities();
  }
  /**
   * @param form - submitting the DestinationAddressForm
   */
  /**  Retrieving city value and emitting to parent */
  submit(form: FormGroup) {
    this.needsAssessment.destinationCity = form.get('City').value;
    this.notify.emit(this.needsAssessment);
  }
  /**
   * Intialising the selected value if value selected or initialising the default value
   */
  ngOnInit() {

    if (this.needsAssessment.destinationCity) {
      this.DestinationAddressForm.controls['City'].setValue(this.needsAssessment.destinationCity);
    }
    else {
      this.DestinationAddressForm.controls['City'].setValue(defaultCity);
    }
  }
}
