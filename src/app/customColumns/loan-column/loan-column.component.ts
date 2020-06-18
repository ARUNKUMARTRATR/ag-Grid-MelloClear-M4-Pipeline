import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-loan-column',
  templateUrl: './loan-column.component.html',
  styleUrls: ['./loan-column.component.scss']
})
export class LoanColumnComponent implements OnInit, ICellRendererAngularComp {
  cellData: any;
  constructor() { }
  refresh(params: any) {
    this.cellData = params.value;
    return true;
  }
  agInit(params: any) {
    this.cellData = params.value;
  }
  ngOnInit(): void {
  }

}
