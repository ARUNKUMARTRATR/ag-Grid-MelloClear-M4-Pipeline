import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'ag-grid-enterprise';
import { UnderwriterComponent } from './underwriter/underwriter.component';
import { ManagerComponent } from './manager/manager.component';
@NgModule({
  declarations: [
    AppComponent,
    UnderwriterComponent,
    ManagerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
