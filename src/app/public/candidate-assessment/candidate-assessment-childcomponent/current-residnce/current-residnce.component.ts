import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CandidateNeedsAssessment, ResidenceDetails } from 'src/app/core/models/candidateneeds-assessment.model';
/**
 * To know about the status of current residence
 */
@Component({
  selector: 'app-current-residnce',
  templateUrl: './current-residnce.component.html',
  styleUrls: ['./current-residnce.component.scss']
})
export class CurrentResidnceComponent implements OnInit {
  /**
   * To disable the button by default
   */
  isNextButton = true;
  /**
   * Assign the variable to own
   */
  residenceOwn = 'Own';
  /**
 * Assign the variable to rent
 */
  residenceRent = 'Rent';
  /**
  * Getting input from parent component
  */
  @Input() needsAssessment: CandidateNeedsAssessment;

  /**
  * Emitting the value from child to parent
  */
  @Output() notify: EventEmitter<CandidateNeedsAssessment> = new EventEmitter<CandidateNeedsAssessment>();
  /**
   * Base constructor
   */
  constructor() { }
  /**
       * Intialising the selected value
       */
  ngOnInit() {
    /**If value is selected initialise them */
    if (!this.needsAssessment.residenceDetails) {
      this.needsAssessment.residenceDetails = {} as ResidenceDetails;
    }
    this.isNextButton = ((this.needsAssessment.residenceDetails.ownerStatus === 'Own') || (this.needsAssessment.residenceDetails.ownerStatus === 'Rent')) ? false : true;
  }
  /**
   * If own is selected execute the onClickOwn function
   */
  onClickOwn() {
    this.needsAssessment.residenceDetails.ownerStatus = 'Own';
    this.isNextButton = false;
  }
  /**
  * If rent is selected execute the onClickRent function
  */
  onClickRent() {
    this.needsAssessment.residenceDetails.ownerStatus = 'Rent';
    this.isNextButton = false;
  }
  /**
  * To emit the selected value to parent 
  */
  emit() {
    this.notify.emit(this.needsAssessment);
  }
}
