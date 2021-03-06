import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatTooltipModule
 } from '@angular/material';

const material = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatTooltipModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ],
  providers:[
    MatDatepickerModule
  ]
})
export class MaterialModule { }
