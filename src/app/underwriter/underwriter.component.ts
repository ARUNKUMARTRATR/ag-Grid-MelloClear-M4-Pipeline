import { LoanColumnComponent } from './../customColumns/loan-column/loan-column.component';
import { ActionColumnComponent } from './../customColumns/action-column/action-column.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-underwriter',
  templateUrl: './underwriter.component.html',
  styleUrls: ['./underwriter.component.scss']
})
export class UnderwriterComponent implements OnInit {
  date = new Date();
  gridApi: any;
  gridColumnApi: any;
  customCells;
  sortingOrder = ['asc', 'desc', null];
  @ViewChild('agGrid') agGrid;

  constructor(private http: HttpClient) {
  }

  columnDefs = [
    {
      headerName: 'LOAN#',
      field: 'loan',
      cellRenderer: 'loanCell',
      width: 230
    },
    {
      headerName: 'BORROWER',
      field: 'borrower',
      width: 150
    },
    {
      headerName: 'CURRENT STATUS',
      field: 'currentStatus',
      width: 180
    },
    {
      headerName: 'NOTES',
      field: 'notes',
      width: 250
    },
    {
      headerName: 'PROGRAM',
      field: 'program',
      width: 150
    },
    {
      headerName: 'DAYS IN PROC',
      field: 'daysInProc',
      width: 155
    },
    {
      headerName: 'Tag',
      width: 100
    },
    {
      headerName: 'PURPOSE',
      field: 'purpose',
      width: 150
    },
    {
      headerName: 'STATUS',
      field: 'status',
      width: 115
    },
    {
      headerName: 'ACTION',
      field: 'action',
      cellRenderer: 'actionCell',
      width: 175,
      pinned: 'right'
    }
  ];
  rowData = [
    {
      loan: { id: 100001, no: 7 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 14 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100003, no: 91 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100004, no: 21 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100005, no: 35 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100006, no: 53 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100007, no: 9 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100008, no: 14 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100009, no: 35 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100010, no: 21 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100011, no: 53 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100012, no: 91 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100013, no: 21 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100014, no: 91 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Denis Gray',
      currentStatus: 'Initial Review',
      notes: 'Get asset details from te borrower',
      program: 'Conv Fixed 30 yr',
      daysInProc: 7,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Dan Stewart',
      currentStatus: 'Initial Review',
      notes: 'The tax amount and due dates are an estimation',
      program: 'Conv Fixed 30 yr',
      daysInProc: 14,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
    {
      loan: { id: 100002, no: 7 },
      borrower: 'Marilyn Turner',
      currentStatus: 'Initial Review',
      notes: 'NA',
      program: 'Conv Fixed 30 yr',
      daysInProc: 8,
      purpose: 'Cash out Refinance',
      status: 'STP',
      action: 'custom'
    },
  ];

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.rowData);
  }
  ngOnInit() {
    this.customCells = {
      actionCell: ActionColumnComponent,
      loanCell: LoanColumnComponent
    };
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
      clearInterval();
    }
}
