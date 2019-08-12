import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CityService } from '../../../../core/services/candidateneeds-assessment.service';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateNeedsAssessment, DestinationAddr, City } from 'src/app/core/models/candidateneeds-assessment.model';
/**
 * To add the error message
 */
export const errorMessages: { [key: string]: string } = {
 /**variable to shoe error message */
  City: 'You must select city',
};

/**
 * To display list of city details
 */
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})

export class CityComponent implements OnInit {
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
  * Binding the dropdown values to level filed
 */
 cityList: City[];

 /**
  * @param formBuilder - To add the formbuilder
  * @param cityService - To access the cityservice
  * checking for the required filed
  */
  constructor(
    private formBuilder: FormBuilder,
    private cityService: CityService) {
      /**to validate the required filed */
      this.DestinationAddressForm = this.formBuilder.group({
        City: ['', Validators.required]
      });
       /**to retriev the value from sdrvice */
      this.cityList = this.cityService.getCity();
     }
     /**
      * @param form - submitting the DestinationAddressForm
      * Retriving city value and assigning to parent
      */
     submit(form: FormGroup) {
      this.needsAssessment.destinationAddr = {} as DestinationAddr;
      this.needsAssessment.destinationAddr.city = form.get('City').value;
      this.notify.emit(this.needsAssessment);
      }
      /**
       * Intialising the selected value
       */
  ngOnInit() {
    this.DestinationAddressForm.controls['City'].setValue(this.cityList[2].cityName);
    if (this.needsAssessment.destinationAddr) {
    this.DestinationAddressForm.controls['City'].setValue(this.needsAssessment.destinationAddr.city);
    }
  }
}
