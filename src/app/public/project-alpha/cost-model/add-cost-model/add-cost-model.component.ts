import { Component, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../../../material/material.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { CandidateProfilesService } from '../../../../core/services/candidate-profiles.service';
import { LocationService } from '../../../../core/services/location.service';
import { LevelService } from '../../../../core/services/level.service';
import { Level } from '../../../../core/models/level';
import { Candidate } from '../../../../core/models/candidate';
import { Location } from '../../../../core/models/location';
import { Observable, empty } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CostModel } from '../../../../core/models/cost-model';
import { CostModelsService } from '../../../../core/services/cost-models.service';
import { NotificationsService } from '../../../../core/services/notifications.service';
import { CostModelEstimate } from '../../../../core/models/cost-model-estimate';
import { CostModelEstimateService } from '../../../../core/services/cost-model-estimate.service';

/**
 * Exporting the errormessages
 */
export const errorMessages: { [key: string]: string } = {
  Email: 'You must enter Email address',
  Departure: 'You must select departure',
  Destination: 'You must select destination',
  Level: 'You must select level'
};

@Component({
  selector: 'app-add-cost-model',
  templateUrl: './add-cost-model.component.html',
  styleUrls: ['./add-cost-model.component.scss']
})
export class AddCostModelComponent {

  /**Form group name */
  addCostModelForm: FormGroup;
  /* Title to display the dialog window page title */
  title: string;
  /**Flag mode for Create */
  mode = 'create';
  /**Assign formready Variable as False */
  formReady = false;
  /**Variables for error */
  errors = errorMessages;
  /**Binding the dropdown values to level filed */
  levels: Level[];
  /** auto complete values for destination */
  options: Location[];
  /** variable declared for depature */
  departures: Observable<Location[]>;
  /** variable declared for destinations */
  destinations: Observable<Location[]>;
  panelOpenState = false;
  costModelEstimates: CostModelEstimate[];
  displayPredictedRelocationCost = false;
  showLoader = false;

  /**
   * Initializes form elements
   * @param formBuilder - property for form elements
   * @param dialogRef - property for mat dialog reference
   * @param data - contains popup data
   * @param candidateProfilesService - service parameter
   * @param changeDetectorRef - property for change detections
   */
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCostModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CostModel,
    private costModelsService: CostModelsService,
    private locationService: LocationService,
    private levelService: LevelService,
    private changeDetectorRef: ChangeDetectorRef,
    private notificationsService: NotificationsService,
    private costModelEstimateService: CostModelEstimateService) {

      /* Setting default title of the dialof window */
      this.title = 'Create Cost Model';

      /* Get all the locations for destination and departure */
      this.options = this.locationService.getLocations();

      /* Get all the locations for destination and departure */
      this.levels = this.levelService.getLevels();

      /* Create the Add/Edit dialog window */
      this.addCostModelForm = this.formBuilder.group({
        ModelName: ['', Validators.required],
        Level: ['', Validators.required],
        Departure: ['', Validators.required],
        Destination: ['', Validators.required]
      });

      /* If the data is present - it will open and pre-populate dialog window */
      if (this.data) {
        /* set page title to edit candidate */
        this.title = 'Edit Cost Model';

        /* Setting the default values for form elements in edit candidate dialog */
        this.addCostModelForm.get('ModelName').setValue(this.data.modelName);
        this.addCostModelForm.get('Destination').setValue(this.data.destination);
        this.addCostModelForm.get('Departure').setValue(this.data.departure);
        this.addCostModelForm.get('Level').setValue(this.data.level.levelName);
      }

      /* Enable the event listener for departure drop down form element */
      this.departures = this.addCostModelForm.get('Departure').valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this._filter(name) : this.options.slice())
      );
      /* Enable the event listener for the destination drop down form element */
      this.destinations = this.addCostModelForm.get('Destination').valueChanges
      .pipe(
        startWith(''),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  /**
   *  Modified incoming value to lowerCase and assigned to const variable filterValue
   * @param value - start character for filter values
   */
  private _filter(value: string): Location[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  /**
   * Click on Submit button inside the addCstModelForm dialog window
   */
  saveCostModel() {
    const levelDetails =  this.levelService.getLevelId(this.addCostModelForm.value.Level);
    this.costModelsService.addCostModel(this.addCostModelForm.value, levelDetails);
    this.dialogRef.close();
    this.notificationsService.flashNotification('success', 'Due to seasonal changes, this cost model expires in 30 days', true, 'dismiss');
  }

  /**
   * Closing the dialog box - we are setting the form to empty
   */
  onNoClick(): void {
    this.dialogRef.close();
    this.addCostModelForm = this.formBuilder.group({
     ModelName: ['', Validators.required],
     Level: ['', Validators.required],
      Departure: ['', Validators.required],
      Destination: ['', Validators.required]
    });
  }

  /**
   * Custom error messages for Firstname, lastname and Email to verify special character or empty errors
   * @param field_name - field parameter to check for errors
   */
  getErrorMessage(field_name) {
    if (field_name === 'MODEL_NAME') {
      return this.addCostModelForm.get('ModelName').hasError('required') ? 'You must enter cost model name' :
      this.addCostModelForm.get('ModelName').hasError('pattern') ? 'Special characters are not allowed' : '';
    }
  }

  showPredictedRelocationCost() {
    this.showLoader = true;
    let checkDepartureFlag = false;
    let checkDestinationFlag = false;
    let checkDeparture: any;
    let checkDestination: any;
    this.departures.subscribe( departureResponse => {
      this.showLoader = false;
      checkDeparture = departureResponse.find( departureObj => {
        // tslint:disable-next-line: rxjs-no-unsafe-scope
        return departureObj.name === this.addCostModelForm.controls.Departure.value;
      });
      console.log(checkDeparture);
      if (checkDeparture) {
         checkDepartureFlag = true;
      }
    });

    this.destinations.subscribe( destinationReponse => {
      this.showLoader = false;
      checkDestination = destinationReponse.find( destinationObj => {
        // tslint:disable-next-line: rxjs-no-unsafe-scope
        return destinationObj.name === this.addCostModelForm.controls.Destination.value;
      });
      if (checkDestination) {
        checkDestinationFlag = true;
      }
    });

    if (checkDepartureFlag && checkDestinationFlag && this.addCostModelForm.controls.Departure.value !== '' &&
    this.addCostModelForm.controls.Departure.valid && this.addCostModelForm.controls.Destination.value !== '' &&
    this.addCostModelForm.controls.Destination.valid && this.addCostModelForm.controls.Level.value !== '' &&
    this.addCostModelForm.controls.Level.valid) {
      console.log('Call an API passing Level, Departure, Destination values');
      /* Get Cost Model Estimates */
      this.costModelEstimates = this.costModelEstimateService.getCostModelEstimates();
      this.displayPredictedRelocationCost = true;
    }
  }
}
