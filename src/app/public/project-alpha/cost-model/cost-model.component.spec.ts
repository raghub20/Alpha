import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, DebugNode } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material';



import { CostModelComponent } from './cost-model.component';
import { MaterialModule } from '../../../material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HighlightSearchPipe } from '../highlight-search.pipe';

describe('CostModelComponent', () => {
  let component: CostModelComponent;
  let fixture: ComponentFixture<CostModelComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, MatTableModule],
      declarations: [ CostModelComponent, HighlightSearchPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MatDialogRef, useValue: [] },
        { provide: MAT_DIALOG_DATA, useValue: [] } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page heading as Cost Models', () => {
    const hTag = fixture.nativeElement.querySelector('h2');
    expect(hTag.innerHTML).toContain('3 Cost Models');
  });

  it('should display default 9 columns in the table', () => {
    const tableBody = fixture.nativeElement.querySelectorAll('table');
    const dataRows = tableBody[0].querySelectorAll('th');
    expect(dataRows.length).not.toBe(null);
    expect(dataRows.length).toBe(9); // 6 is the default display columns right now
  });

  it('should have 3 rows in the table', () => {
    const tableBody  = <HTMLElement[]>fixture.nativeElement.querySelectorAll('tbody');
    const dataRows = tableBody[0].querySelectorAll('tr');
    expect(dataRows.length).not.toBe(null);
    expect(dataRows.length).toBe(3); // total number of rows in the table
  });

  it('should show paginator', async () => {
    // find pager
    const pager = fixture.nativeElement.querySelectorAll('mat-paginator');
    expect(pager).toBeTruthy();
    
  });

  it('should call applyFilter function when user types', async () => {
    spyOn(component, "applyFilter");
   el = fixture.debugElement.query(By.css('#searchInput')).nativeElement;
    expect(el).toBeTruthy();
    const event = new KeyboardEvent("keyup");
    el.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.applyFilter).toHaveBeenCalledTimes(1);
  });

  it('should show select columns dialog when user clicks on the select columns icon', async () => {
    spyOn(component, "openModal");
    el = fixture.debugElement.query(By.css('#selectColumns')).nativeElement;
    expect(el).toBeTruthy();
    el.click();
    fixture.detectChanges();
    expect(component.openModal).toHaveBeenCalledTimes(1);
  });

  it('should open transferee assessment dialog when clicked on table row', async() => {
    const tableRows: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.mat-row');
    tableRows.forEach( a => {
      a.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.open).toHaveBeenCalled();
      });
    });
  });

  it('should select all when clicked on checkbox', async() => {
    const tableRows: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.mat-header-row');
    const headerCheckBox = tableRows[0];
    headerCheckBox.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.masterToggle).toHaveBeenCalled();
    });
  });

  it('should select a row when clicked on checkbox', async() => {
    const tableRows: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.mat-row');
    const headerCheckBox = tableRows[0];
    expect(headerCheckBox).toBeTruthy();
    headerCheckBox.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.selection.toggle).toHaveBeenCalled();
    });
  });

  it('should delete a row when the user clicks on the delete icon', async () => {
    spyOn(component, "deleteRow");
    const tableBody  = <HTMLElement[]>fixture.nativeElement.querySelectorAll('tbody');
    const dataRows = tableBody[0].querySelectorAll('tr');
    const dataColumns = dataRows[1].querySelectorAll('td');
    console.log("Table Rows :" + dataColumns.length);
    const deleteIcon = dataColumns[8].querySelector('a');
    console.log("Delete Icon :" + deleteIcon);
    expect(deleteIcon).toBeTruthy();
    deleteIcon.click();
    fixture.detectChanges();
    expect(component.deleteRow).toHaveBeenCalled();
  });

});
