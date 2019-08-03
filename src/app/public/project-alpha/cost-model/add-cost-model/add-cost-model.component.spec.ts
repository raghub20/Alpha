import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCostModelComponent } from './add-cost-model.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatButtonModule, MatSidenavModule,
  MatExpansionModule, MatIconModule, MatCheckboxModule, MatDialogModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CostModel } from '../../../../core/models/cost-model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By, BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('AddCostModelComponent', () => {
  let component: AddCostModelComponent;
  let fixture: ComponentFixture<AddCostModelComponent>;
  let elm: HTMLElement;
  const model: CostModel = {
    'costModelId': '7867877',
    'modelName': 'Mid-Level Manager',
    'level': {
      'levelId': 'level2',
      'levelName': 'Level 2 (100,001 to 250,000 USD)',
      'levelDescription': 'Level 2 - Salary details'
    },
    'departure': 'NJ, Nutley',
    'destination': 'TX, Austin',
    'hrLinks': [{
      'linkId': '9099',
    'Hr_link_url': 'https://www.mycigna.com/abcompany',
    'link_type': 'Healthcare',
    }],
    'updateDate': '2019/05/27',
    'createdBy': 'Admin',
    'createdDate': '2019/05/20'
  };
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule ],
      declarations: [ AddCostModelComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('variables', () => {
    expect(component.addCostModelForm).toBeDefined();
    expect(component.errors).toBeDefined();
    expect(component.mode).toBeDefined();
    expect(component.formReady).toBe(false);
    expect(component.levels).toBeDefined();
    expect(component.departures).toBeDefined();
    expect(component.destinations).toBeDefined();
  });

  it('should create a form with these ', () => {
    expect(component.addCostModelForm.contains('ModelName')).toBeTruthy();
    expect(component.addCostModelForm.contains('Level')).toBeTruthy();
    expect(component.addCostModelForm.contains('Departure')).toBeTruthy();
    expect(component.addCostModelForm.contains('Destination')).toBeTruthy();
  });

  it('should make cost model name required', () => {
    const control = component.addCostModelForm.get('ModelName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make level required', () => {
    const control = component.addCostModelForm.get('Level');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make departure required', () => {
    const control = component.addCostModelForm.get('Departure');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make destination required', () => {
    const control = component.addCostModelForm.get('Destination');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should check whether error message is called when giving invaild data', () => {
    const spy = spyOn(component, 'getErrorMessage').and.callThrough();
    const control = component.addCostModelForm.get('ModelName');
    control.setValue('');
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should check whether getErrorMessage is called whengiving special characters' , () => {
    const control = component.addCostModelForm.get('ModelName');
    control.setValue('Finance@');
    const spy = spyOn(component, 'getErrorMessage').and.callThrough();
    component.getErrorMessage('MODEL_NAME');
    expect(spy).toHaveBeenCalled();
  });

  it('should close dialog once clicked onNoClick', () => {
    const spy = spyOn(component, 'onNoClick').and.callThrough();
    component.onNoClick();
    expect(spy).toHaveBeenCalled();
  });

  it('should call onNoClick on cancel method', async(() => {
    spyOn(component, 'onNoClick');
    elm = fixture.debugElement.query(By.css('#cancel_cost_model')).nativeElement;
    elm.click();
    expect(component.onNoClick).toHaveBeenCalledTimes(1);
  }));
});
