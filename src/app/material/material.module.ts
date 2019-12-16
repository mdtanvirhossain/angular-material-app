import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';

const materialComponent = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule

];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    materialComponent
  ],
  exports: [
    materialComponent
  ]
})
export class MaterialModule { }
