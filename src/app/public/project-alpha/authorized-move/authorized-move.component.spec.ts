import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, DebugNode } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthorizedMoveComponent } from './authorized-move.component';
import { MaterialModule } from 'src/app/material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HighlightSearchPipe } from '../highlight-search.pipe';
import { MatTableModule } from '@angular/material';
import { ApprovedMove } from '../../../core/models/approved-move';
import { ApprovedMovesService } from 'src/app/core/services/approved-moves.service';

describe('AuthorizedMoveComponent', () => {
  let component: AuthorizedMoveComponent;
  let fixture: ComponentFixture<AuthorizedMoveComponent>;
  let el: HTMLElement;
  let service: ApprovedMovesService;
  let de:DebugElement[];
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule,MatTableModule ],
      declarations: [ AuthorizedMoveComponent, HighlightSearchPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedMoveComponent);
    component = fixture.componentInstance;
    service = new ApprovedMovesService();
    fixture.detectChanges();
 });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render page heading as Approved Moves', () => {
    const hTag = fixture.nativeElement.querySelector('h2');
    expect(hTag.innerHTML).toContain('Approved Moves');
  });

  it('should display default 6 columns in the table', () => {
    const tableBody = fixture.nativeElement.querySelectorAll('table');
    const dataRows = tableBody[0].querySelectorAll('th');
    expect(dataRows.length).not.toBe(null);
    expect(dataRows.length).toBe(6); // 6 is the default display columns right now
  });

  it('should have 7 rows in the table', () => {
    const tableBody  = <HTMLElement[]>fixture.nativeElement.querySelectorAll('tbody');
    const dataRows = tableBody[0].querySelectorAll('tr');
    expect(dataRows.length).not.toBe(null);
    expect(dataRows.length).toBe(7); // total number of rows in the table
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

  it('should check if the date format is YYYY-MM-DD', async () => {
    const tableBody  = <HTMLElement[]>fixture.nativeElement.querySelectorAll('tbody');
    const dataRows = tableBody[0].querySelectorAll('tr');
    const date = dataRows[4].querySelectorAll('td');
    fixture.detectChanges();
    expect(service.verifyDate(date)).toBe(true);
  });

});
