import { Component, ViewChild } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatStepper } from '@angular/material';

@Component({
    selector: 'app-candidate-assessment',
    templateUrl: './candidate-assessment.component.html',
    styleUrls: ['./candidate-assessment.component.scss']
})
export class CandidateAssessmentComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  answers: string[] = ['1', '2', '3+', '5+'];
 
  sliderArray: object[];
  transform: number;
  selectedIndex = 0;
 
  slideLength: number;
  value1 : any;
  filteredObj: any;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(private _formBuilder: FormBuilder, private location: Location) {
      this.location.go('/step/1');
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

public onStepChange(event: any): void {
  //console.log(this.stepper.selectedIndex);  
  //console.log(event);  
  //console.log(event.selectedIndex);
    let stepVal = '/candidate-assessment/step/' + event.selectedIndex;
    this.location.go(stepVal);
  }

}
