import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateNeedsAssessment, DepartureAddr } from 'src/app/core/models/candidateneeds-assessment.model';
import { CandidateAssessmentComponent } from '../../candidate-assessment.component';
/**
 * To add the error messages 
 */
export const errorMessages: { [key: string]: string } = {
  Street: 'You must enter Street address',
  Town: 'You must enter Town address',
  State: 'You must enter State name',
  ZIP: 'You must enter ZIP code',
};

/**
 * To display the current residence address
 */
@Component({
  selector: 'app-current-address',
  templateUrl: './current-address.component.html',
  styleUrls: ['./current-address.component.scss']
})

export class CurrentAddressComponent implements OnInit {
   /**
   * Getting input from parent component
   */
  @Input() needsAssessment: CandidateNeedsAssessment;

  /**
   * Emitting the value from child to parent
   */
  @Output() notify: EventEmitter<CandidateNeedsAssessment> = new EventEmitter<CandidateNeedsAssessment>();
   /**
    *  Storing the error messages
   */
  errors = errorMessages;
  /** 
   * 
   * Form group name
  */
  AddressForm: FormGroup;
  /** 
   * Assigning the value to string
   */
  value: string;

  /**
   * @param formBuilder -  To add the formbuilder
   */
  constructor(private formBuilder: FormBuilder) {
    /**
     *  required filed validation
     */
    this.AddressForm = this.formBuilder.group({
      Address: ['', Validators.required],
      Town: ['', Validators.required],
      State: ['', Validators.required],
      ZIP: ['', Validators.required]
    });
  }
  /**
      * @param form - submitting the AddressForm
      * Retriving city value and assigning to parent
      */
  submit(form: FormGroup) {
    this.needsAssessment.departureAddr = {} as DepartureAddr;
    this.needsAssessment.departureAddr.streetAddress = form.get('Address').value;
    this.needsAssessment.departureAddr.town = form.get('Town').value;
    this.needsAssessment.departureAddr.state = form.get('State').value;
    this.needsAssessment.departureAddr.zip = form.get('ZIP').value;
    this.notify.emit(this.needsAssessment);
  }

   /**
       * Intialising the selected value
       */
  ngOnInit() {
    if (this.needsAssessment.departureAddr) {
      this.AddressForm.controls['Address'].setValue(this.needsAssessment.departureAddr.streetAddress);
      this.AddressForm.controls['Town'].setValue(this.needsAssessment.departureAddr.town);
      this.AddressForm.controls['State'].setValue(this.needsAssessment.departureAddr.state);
      this.AddressForm.controls['ZIP'].setValue(this.needsAssessment.departureAddr.zip);            
    }    
  }
}
