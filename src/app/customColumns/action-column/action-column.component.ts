import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-action-column',
  templateUrl: './action-column.component.html',
  styleUrls: ['./action-column.component.scss']
})
export class ActionColumnComponent implements OnInit, ICellRendererAngularComp {
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
