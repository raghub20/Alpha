import { Component, OnInit, ViewChild, ViewEncapsulation, ChangeDetectorRef, Inject, SimpleChanges, Input } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { CandidateProfilesService } from '../../../core/services/candidate-profiles.service';
import { Candidate } from '../../../core/models/candidate';
import { FormGroup } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { Selection } from '../../../core/models/selection.model';
import { CostModel } from '../../../core/models/cost-model';
import { CostModelsService } from '../../../core/services/cost-models.service';
import { ModelColumnsComponent } from './model-columns/model-columns.component';
import { AddCostModelComponent } from './add-cost-model/add-cost-model.component';
import { NotificationsService } from '../../../../../src/app/core/services/notifications.service';

@Component({
  selector: 'app-cost-model',
  templateUrl: './cost-model.component.html',
  styleUrls: ['./cost-model.component.scss']
})
export class CostModelComponent implements OnInit {


  displayedColumns: string[] = ['select','modelName', 'level.levelName','departure', 'destination','updateDate','expirationDate','status','action'];

  addCandidateForm: FormGroup;
  dataSource: any;
  ELEMENT_DATA: any;
  filterText = '';
  deleteFlag: boolean = false;

  currentCostModelCount: any;

  selection = new SelectionModel<CostModel>(true, []);
  columnList: Selection[] = [];

  constructor(public dialog: MatDialog,
    private costModelsService: CostModelsService,
    private notificationsService: NotificationsService,
    private changeDetectorRefs: ChangeDetectorRef) { }

  /** To sort the mat table columns */
  @ViewChild(MatSort) sort: MatSort;
  /** To paginate in a mat table */
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() selectedCols: Selection[];

  ngOnInit() {
    this.ELEMENT_DATA = this.costModelsService.getCostModels();
    this.currentCostModelCount = this.ELEMENT_DATA.length;
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId: string) => {
      return this.getPropertyByPath(data, sortHeaderId);
    };
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.destination + data.modelName + data.departure + data.level.levelName;
      return dataStr.indexOf(filter) !== -1;
    };
  }

  applyFilter(filterValue: string) {
    this.filterText = filterValue.trim();
    this.dataSource.filter = filterValue;
  }

  getPropertyByPath(obj: Object, pathString: string) {
    return pathString.split('.').reduce((o, i) => o[i], obj);
  }

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  updateDataSource() {
    this.ELEMENT_DATA = this.costModelsService.getCostModels();
    this.currentCostModelCount = this.ELEMENT_DATA.length;
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (data, sortHeaderId: string) => {
      return this.getPropertyByPath(data, sortHeaderId);
    };
  }

   /* Method to check if all the rows in the mat table were selected*/
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /* Method to toggle select all or clear all for rows inside in the mat table */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: CostModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.modelName + 1}`;
  }

  /* Open the dialog box AddCandidateComponent in EDIT mode when any row is clicked of the mat table*/
  public open(event, data) {
    const dialogRef = this.dialog.open(AddCostModelComponent, {
      panelClass: 'addCostModelModal',
      data: data
    });

//    this.selection.select = data;
    console.log(data, 'ok you clicked on a table row....');

    dialogRef.afterOpened().subscribe(result => {
      console.log('This dialog was opened');
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public deleteRow(event, data, deleteFlag) {
    data.isDeleted = deleteFlag;
    console.log("Delete Flag : " + data.isDeleted);
    const dialogRef = this.dialog.open(AddCostModelComponent, {
      panelClass: 'addCostModelModal',
      data: data
    });

//    this.selection.select = data;
    console.log(data, 'ok you clicked on a table row....');

    dialogRef.afterOpened().subscribe(result => {
      console.log('This dialog was opened');
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Cost Model List' + this.costModelsService.getCostModels);
      var updatedCount = (this.costModelsService.costModelList.filter( item => item.isDeleted === false )).length;
      if (updatedCount < this.currentCostModelCount){
        this.notificationsService.flashNotification('danger','Cost Model deleted successfully.', true, 'dismiss');
      }
      this.updateDataSource();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCostModelComponent, {
     panelClass: 'addCostModelModal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Cost Model List' + this.costModelsService.getCostModels);
      var updatedCount = (this.costModelsService.costModelList.filter( item => item.isDeleted === false )).length;
      console.log('Updated Cost Model Count' + updatedCount);
      console.log('Current Cost Model Count' + this.currentCostModelCount);
      if (updatedCount > this.currentCostModelCount){
        this.notificationsService.flashNotification('success','Due to seasonal changes, this cost model expires in 30 days. Cost Model added successfully.', true, 'dismiss');
      }
      this.updateDataSource();
    });
  }
  /* Resend Invite Modal window */
  openAlert(event: any) {
    /*
    const dialogRef = this.dialog.open(ResendInviteComponent);

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });

    event.stopPropagation();
    */
  }

  filterResults(filterVal) {
    this.applyFilter(filterVal);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModelColumnsComponent, {
      panelClass: 'DisplayedColumnsModal',
      data: this.displayedColumns
    });
    const res = dialogRef.componentInstance.columnsListUpdated.subscribe((response: Selection[]) => {
      this.columnList = response;
      this.selectedCols = this.columnList;
      this.updateTable();
    });
  }
  updateTable() {
      this.selectedCols.forEach((item, index) => {
        if (this.displayedColumns.indexOf(item.value) < 0) {
          this.displayedColumns.push(item.value);
        } else {
          this.displayedColumns = this.displayedColumns.filter((val) => {
            return item.value === val;
          });
        }
      });
    if (this.displayedColumns.findIndex(val => val === 'select') < 0) {
      this.displayedColumns.unshift('select');
    }
  }
}
