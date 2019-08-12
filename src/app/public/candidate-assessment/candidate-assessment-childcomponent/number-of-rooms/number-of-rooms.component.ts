import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CandidateNeedsAssessment } from 'src/app/core/models/candidateneeds-assessment.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * To select  number of rooms
 */
@Component({
  selector: 'app-number-of-rooms',
  templateUrl: './number-of-rooms.component.html',
  styleUrls: ['./number-of-rooms.component.scss']
})
export class NumberOfRoomsComponent implements OnInit {
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
  RoomsForm: FormGroup;
  /**
   * Variable for count
   */
  count: number;

  /**
   *
   * @param formBuilder - to check for the required filed
   */
  constructor(private formBuilder: FormBuilder) {
    /**
     * To check for the required filed validator
     */
    this.RoomsForm = this.formBuilder.group({
      Count: ['', Validators.required]
    });
  }
   /**
       * Intialising the selected value
       */
  ngOnInit() {
    this.count = 1;
    this.RoomsForm.get('Count').setValue(this.count);
  }
  /**
   * Increment onclick
   */
  incNum() {
    if (this.count < 3) {
    this.count = this.count + 1;
    this.RoomsForm.get('Count').setValue(this.count);
    }
  }
 /**
  * decrement onclick
  */
  decNum() {
    if ( this.count > 1) {
    this. count = this.count - 1;
    this.RoomsForm.get('Count').setValue(this.count);
    }
  }
/**
 * @param form submitting the form
 * storing the formvalue and emit to parent
 */
  submit(form: FormGroup) {
    this.needsAssessment.residenceDetails.noOfRooms = form.get('Count').value;
    this.notify.emit(this.needsAssessment);
    }
}
