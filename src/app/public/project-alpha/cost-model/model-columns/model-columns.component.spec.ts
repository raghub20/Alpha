import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ModelColumnsComponent } from './model-columns.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule, MatMenuModule, MatButtonModule, MatSidenavModule, MatExpansionModule, MatIconModule, MatCheckboxModule, MatDialogModule, MatSelectModule, MatAutocompleteModule, MatGridListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Selection } from '../../../../core/models/selection.model';
import { Subscription } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';

describe('ModelColumnsComponent', () => {
  let component: ModelColumnsComponent;
  let fixture: ComponentFixture<ModelColumnsComponent>;

  let de:DebugElement[];
  let el:HTMLElement;

  const model: Selection[] = [
    {
      displayName: 'Model Name',
      value: 'modelName',
      flag: true,
      disabled: true
    },
    {
      displayName: 'Delete',
      value: 'action',
      flag: true,
      disabled: true
    },
    {
      displayName: 'Level',
      value: 'level.levelName',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Departure',
      value: 'departure',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Destination',
      value: 'destination',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Last Update Date',
      value: 'updateDate',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Expiration Date',
      value: 'expirationDate',
      flag: true,
      disabled: false
    },
    {
      displayName: 'Status',
      value: 'status',
      flag: true,
      disabled: false
    }
  ];

  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelColumnsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** Please uncomment this test case when refactoring/adding other unit tests  */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define variables',()=>{
    expect(component.columnsList).toBeDefined();
   
  });

  it('should check whether checkboxes are created and also the count',()=>{
    const checkbox=fixture.debugElement.queryAll(By.css('mat-checkbox'));
    const lengths:number=checkbox.length;
    for(var l=0;l<lengths;l++)
    {
      expect(checkbox[l].nativeElement).toBeTruthy();
    }
    expect(lengths).toEqual(8);
  });
 
  it('check whether model name and delete is selected by default',()=>{
   expect(component.columnsList[0].flag).toBe(true);
   expect(component.columnsList[1].flag).toBe(true);
   expect(component.columnsList[0].disabled).toBe(true);
   expect(component.columnsList[1].disabled).toBe(true);
  });

  it('should check the number of selected checkboxes on loading',()=>{
    expect(component.columnsList.length).toEqual(8);
  });
  
  it('should check whether on click of checkbox is working',()=>{
    spyOn(component,'updateChkbxArray').and.callThrough();
    de=fixture.debugElement.queryAll(By.css('mat-checkbox'));
    el= de[3].nativeElement;
    expect(component.columnsList[3].flag).toBe(true);
    console.log("Before selection:" + component.columnsList[3].flag)
    el.click();
    el.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.updateChkbxArray).toHaveBeenCalledTimes(1);
    console.log("After selection:" + component.columnsList[3].flag)
    // expect(component.columnsList[3].flag).toBe(false);
  });

  it('should check whether on click of selected checkbox is changing to false',()=>{
    spyOn(component,'updateChkbxArray').and.callThrough();
    de=fixture.debugElement.queryAll(By.css('mat-checkbox'));
    el= de[3].nativeElement;
    expect(component.columnsList[3].flag).toBe(true);
    el.click();
    el.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.updateChkbxArray).toHaveBeenCalledTimes(1);
    // expect(component.columnsList[3].flag).toBe(false);
    // expect(component.selectedColumnsList.length).toEqual(4);
  });
  
 it ('should check whether onclick of OK button calls save function',()=>{

     spyOn(component, 'save');
     el=fixture.debugElement.query(By.css('#save')).nativeElement;
     el.click();
     fixture.detectChanges();
     expect(component.save).toHaveBeenCalledTimes(1);
  });

  it ('should check whether onclick of Reset button calls resetValues function',()=>{
      spyOn(component,'resetValues')
      el=fixture.debugElement.query(By.css('#reset')).nativeElement;      
      el.click();
      fixture.detectChanges();
      expect(component.resetValues).toHaveBeenCalledTimes(1);
  });

  it ('should check whether onclick of close button calls onNoClick function',()=>{
    spyOn(component,'onNoClick')
    el=fixture.debugElement.query(By.css('#close')).nativeElement;
    el.click();
    fixture.detectChanges();
    expect(component.onNoClick).toHaveBeenCalledTimes(1);
  });

  it ('should check whether unsubscribe method is called in ngOnDestroy',()=>{
    spyOn(Subscription.prototype, 'unsubscribe');
    component.ngOnDestroy();
    expect(Subscription.prototype.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('should close dialog once clicked onNoClick', () => {
   let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onNoClick();  
    expect(spy).toHaveBeenCalled();
  });

  it('check whether reset values is getting called',()=>{
    const spy=spyOn(component,'resetValues').and.callThrough();
    component.resetValues();
    expect(spy).toHaveBeenCalled();
  });

  it('check whether save  is getting called',()=>{
    let spy=spyOn(component.dialogRef,'close').and.callThrough();
    component.save();
    expect(spy).toHaveBeenCalled();
  });
 

});
