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
  /**initialising the model of type CandidateNeedsAssessment */

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
   * If yes is selected execute the onClickYes function
   */
  onClickYes() {
    this.candidateAssessment.familyDetails.relocationStatus = 'Yes';
    this.isNextButton = (this.candidateAssessment.familyDetails.relocationStatus === 'Yes') ? false : true;
  }
   /**
* If no is selected execute the onClickNo function
   */
  onClickNo() {
    this.candidateAssessment.familyDetails.relocationStatus = 'No';    
    this.isNextButton = (this.candidateAssessment.familyDetails.relocationStatus === 'No') ? false : true;
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
    if (this.needsAssessment.familyDetails) {
      this.candidateAssessment = this.needsAssessment;
    }
    this.isNextButton = ((this.candidateAssessment.familyDetails.relocationStatus === 'Yes') || (this.candidateAssessment.familyDetails.relocationStatus === 'No'))? false : true;
 
  }

}
