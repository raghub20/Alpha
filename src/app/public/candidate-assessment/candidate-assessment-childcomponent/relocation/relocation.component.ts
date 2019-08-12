import { Component, OnInit, OutputDecorator, EventEmitter, Output, Input } from '@angular/core';
import { CandidateNeedsAssessment, FamilyDetails } from '../../../../core/models/candidateneeds-assessment.model';
/**
 * To check for relocation
 */
@Component({
  selector: 'app-relocation',
  templateUrl: './relocation.component.html',
  styleUrls: ['./relocation.component.scss']
})
export class RelocationComponent implements OnInit {
   /**
 * To disable the button by default
 */
  isNextButton = true;
  /**
  * variable to declare the yes
  */
  relocYes = 'YES';
  /**
  * variable to declare no
  */
  relocNo = 'NO';

  candidateAssessment: CandidateNeedsAssessment = { familyDetails: {} as FamilyDetails } as CandidateNeedsAssessment;
    /**
   * Getting input from parent component
   */
  @Input() needsAssessment: CandidateNeedsAssessment;
    /**
   * Emitting the value from child to parent
   */
  @Output() notify: EventEmitter<CandidateNeedsAssessment> = new EventEmitter<CandidateNeedsAssessment>();
 
  /**
   * To check for the selected value yes
   */
  onClickYes() {
    this.candidateAssessment.familyDetails.relocationStatus = 'Yes';
    this.candidateAssessment.familyDetails.selectedYes = true;
    this.candidateAssessment.familyDetails.selectedNo = false;
    this.isNextButton = (this.candidateAssessment.familyDetails.selectedYes === true) ? false : true;
  }
   /**
   * To check for the selected value No
   */
  onClickNo() {
    this.candidateAssessment.familyDetails.relocationStatus = 'No';
    this.candidateAssessment.familyDetails.selectedYes = false;
    this.candidateAssessment.familyDetails.selectedNo = true;
    this.isNextButton = (this.candidateAssessment.familyDetails.selectedNo === true) ? false : true;
  }
    /**
   * To emit the value to parent 
   */
  emit() {
    this.notify.emit(this.candidateAssessment);
  }
  /**
   * Base constructor
   */
  constructor() { }
  
     /**
       * Intialising the selected value
       */
  ngOnInit() {
    this.candidateAssessment.familyDetails.selectedYes = false;
    this.candidateAssessment.familyDetails.selectedNo = false;
    if (this.needsAssessment.familyDetails) {
      this.candidateAssessment = this.needsAssessment;
    }
    this.isNextButton = ((this.candidateAssessment.familyDetails.selectedYes === true) || (this.candidateAssessment.familyDetails.selectedNo === true))? false : true;
 
  }

}
