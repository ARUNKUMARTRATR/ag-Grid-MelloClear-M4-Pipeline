import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'ag-grid-enterprise';
import { UnderwriterComponent } from './underwriter/underwriter.component';
import { ManagerComponent } from './manager/manager.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { LoanColumnComponent } from './customColumns/loan-column/loan-column.component';
import { ActionColumnComponent } from './customColumns/action-column/action-column.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { M4DocsComponent } from './dialogPages/m4-docs/m4-docs.component';
import { PublicNotesComponent } from './dialogPages/public-notes/public-notes.component';
import { AddNotesComponent } from './dialogPages/add-notes/add-notes.component';
import { AddDocsComponent } from './dialogPages/add-docs/add-docs.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UnderwriterComponent,
    ManagerComponent,
    LoanColumnComponent,
    ActionColumnComponent,
    M4DocsComponent,
    PublicNotesComponent,
    AddNotesComponent,
    AddDocsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatDividerModule,
    MatChipsModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([LoanColumnComponent, ActionColumnComponent])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [M4DocsComponent, PublicNotesComponent, AddDocsComponent, AddNotesComponent]
})
export class AppModule { }
