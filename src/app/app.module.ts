import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingComponents, AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './dataTable/table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
