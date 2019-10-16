import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorRoutingModule } from './donor-routing.module';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { ContributeComponent } from './contribute/contribute.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/layout/material/material.module';

@NgModule({
  declarations: [DonorHomeComponent,ContributeComponent],
  imports: [
    CommonModule,
    DonorRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class DonorModule { }
