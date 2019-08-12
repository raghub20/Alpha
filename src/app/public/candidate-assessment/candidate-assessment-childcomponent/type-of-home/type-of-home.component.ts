import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CandidateNeedsAssessment } from 'src/app/core/models/candidateneeds-assessment.model';
/**
 * To select the type of home
 */
@Component({
  selector: 'app-type-of-home',
  templateUrl: './type-of-home.component.html',
  styleUrls: ['./type-of-home.component.scss']
})
export class TypeOfHomeComponent implements OnInit {
     /**
   * Getting input from parent component
   */
  @Input() needsAssessment: CandidateNeedsAssessment;
     /**
   * Emitting the value from child to parent
   */
  @Output() notify: EventEmitter<CandidateNeedsAssessment> = new EventEmitter<CandidateNeedsAssessment>();
   /**
  * variable to declare the house
  */
  home = 'House';
   /**
  * variable to declare the apmt
  */
  aptmnt = 'Apartment/Condo/Co-Op';
   /**
  * variable to declare the town
  */
  town = 'Townhouse';
     /**
 * To disable the button by default
 */
  isNextButton = true;
    /**
  * Assigned as string
  */
  homeType: string;

  /**
   * Base constructor
   */
  constructor() { }
   /**
       * Intialising the selected value
       */
  ngOnInit() {
    this.isNextButton = ((this.needsAssessment.residenceDetails.isSelectedHome == true) || (this.needsAssessment.residenceDetails.isSelectedAptmnt == true) || (this.needsAssessment.residenceDetails.isSelectedTown == true)) ? false : true;
  }
  /**
   * 
   * @param type - assigned as string
   * To check the selected value
   */
  checkHomeType(type: string) {
    if (type === this.home) {
      this.needsAssessment.residenceDetails.homeType = this.home;
      this.needsAssessment.residenceDetails.isSelectedHome = true;
      this.needsAssessment.residenceDetails.isSelectedAptmnt = false;
      this.needsAssessment.residenceDetails.isSelectedTown = false;
      this.isNextButton = false;
    } else if (type === this.aptmnt) {
      this.needsAssessment.residenceDetails.homeType = this.aptmnt;
      this.needsAssessment.residenceDetails.isSelectedHome = false;
      this.needsAssessment.residenceDetails.isSelectedAptmnt = true;
      this.needsAssessment.residenceDetails.isSelectedTown = false;
      this.isNextButton = false;
    } else {
      this.needsAssessment.residenceDetails.homeType = this.town;
      this.needsAssessment.residenceDetails.isSelectedHome = false;
      this.needsAssessment.residenceDetails.isSelectedAptmnt = false;
      this.needsAssessment.residenceDetails.isSelectedTown = true;
      this.isNextButton = false;
    }
  }
     /**
   * To emit the value to parent 
   */
  emit() {
    this.notify.emit(this.needsAssessment);
  }
}
