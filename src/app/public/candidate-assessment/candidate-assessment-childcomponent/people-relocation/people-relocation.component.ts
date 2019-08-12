import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CandidateNeedsAssessment } from 'src/app/core/models/candidateneeds-assessment.model';

/**
 * To select number of people relocating
 */
@Component({
  selector: 'app-people-relocation',
  templateUrl: './people-relocation.component.html',
  styleUrls: ['./people-relocation.component.scss']
})

export class PeopleRelocationComponent implements OnInit {
  /**
 * To disable the button by default
 */
  isNextButton = true;
  /**
   * variable to declare the number of persons
   */
  onePerson = '1';
  /**
  * variable to declare the number of persons
  */
  twoPeople = '2';
  /**
  * variable to declare the number of persons
  */
  threePeople = '3';
  /**
  * variable to declare the number of persons
  */
  fourPlusPeople = '4+';
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
    this.isNextButton = ((this.needsAssessment.familyDetails.noOfRelocatePeople === '1') || (this.needsAssessment.familyDetails.noOfRelocatePeople === '2') || (this.needsAssessment.familyDetails.noOfRelocatePeople === '3') || (this.needsAssessment.familyDetails.noOfRelocatePeople === '4')) ? false : true;
  }

  /**
   * 
   * @param count - to retrieve the count
   * To check for the people count
   */
  peopleCount(count) {
    /**
     * condition to check based on the value selected
     */
    this.needsAssessment.familyDetails.noOfRelocatePeople = (count === this.onePerson) ? '1' : (count === this.twoPeople) ? '2' : (count === this.threePeople) ? '3' : '4';
    this.isNextButton = false;
  }
  /**
  * To emit the value to parent 
  */
  emit() {
    this.notify.emit(this.needsAssessment);
  }
}
