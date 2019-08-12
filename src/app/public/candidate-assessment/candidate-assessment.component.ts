import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatStepper } from '@angular/material';
import {CandidateNeedsAssessment} from '../../core/models/candidateneeds-assessment.model';

/**
 * Landing page to include all the components
 */
@Component({
  selector: 'app-candidate-assessment',
  templateUrl: './candidate-assessment.component.html',
  styleUrls: ['./candidate-assessment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CandidateAssessmentComponent implements OnInit {
  assessmentModel:CandidateNeedsAssessment = {} as CandidateNeedsAssessment;
  
  @ViewChild('stepper') stepper: MatStepper;

  /**
   * Formgroup name
   */
  firstFormGroup: FormGroup;
  /**
   * Formgroup name
   */
  secondFormGroup: FormGroup;
 /**
  * Assigned the value to variable
  */
  Index = 0;

  answers: string[] = ['1', '2', '3+', '5+'];

  sliderArray: object[];
  transform: number;
  selectedIndex = 0;

  slideLength: number;
  value1: any;
  filteredObj: any;  

  /**
   * 
   * @param _formBuilder - Formbuilder
   * @param location - location
   * To route to the particular location
   */
  constructor(private _formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute) {
    //this.location.go('/step/1');
  }
     /**
       * Intialising the selected value
       */
  ngOnInit() {
    this.Index = 0;

    this.activatedRoute.params.subscribe( params => {
        let steppingId = parseInt(params["id"]);
        
        if(steppingId > 0 && steppingId < 8)
        {
          this.changeStep(steppingId);
        }
        else {
          this.changeStep(0);
        }
      }
    );

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
 /**
  * 
  * @param event - selected index
  * To set the selected index
  */
  public onStepChange(event: any): void {
    const stepVal = '/candidate-assessment/step/' + event.selectedIndex;
    this.location.go(stepVal);
  }
 /**
  * @param message - parent message
  * Parent component
  */
  onNotify(message: CandidateNeedsAssessment): void {
    this.assessmentModel = message;
  }
  changeStep(index: number) {
    this.stepper.selectedIndex = index;
    const stepVal = 'candidate-assessment/step/' + index;
    this.location.go(stepVal);
  } 
}
