import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailsComponent } from './candidate-details.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTableModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HighlightSearchPipe } from '../../highlight-search.pipe';

describe('CandidateDetailsComponent', () => {
  let component: CandidateDetailsComponent;
  let fixture: ComponentFixture<CandidateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, MatTableModule ],
      declarations: [ CandidateDetailsComponent, HighlightSearchPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the table', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).not.toBe(null);
  });

  it('should render the table header row', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    const headerRow = tableRows[0];
    expect(headerRow.cells[1].innerHTML).toBe(' Full Name ');
    expect(headerRow.cells[2].innerHTML).toBe(' Level ');
    expect(headerRow.cells[3].innerHTML).toBe(' Departure ');
    expect(headerRow.cells[4].innerHTML).toBe(' Destination ');
    expect(headerRow.cells[5].innerHTML).toBe(' Status ');
  });

  it('should display data in the table ', () => {
    const tableBody = <HTMLElement[]>fixture.nativeElement.querySelectorAll('tbody');
    const dataRows = tableBody[0].querySelectorAll('tr');
    expect(dataRows.length).not.toBe(null);
    expect(dataRows.length).toBe(11);   // 5 is the default for paging right now
  });

  it('should open edit candidate dialog when clicked on table row', async() => {
    const tableRows: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('.mat-row');
    tableRows.forEach( a => {
      a.click();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.open).toHaveBeenCalled();
      });
    });
  });
});
