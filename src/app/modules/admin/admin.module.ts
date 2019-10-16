import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RaisefundComponent } from './raisefund/raisefund.component';
import { UpdatefundComponent } from './updatefund/updatefund.component';
import { ListdonorComponent } from './listdonor/listdonor.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/layout/material/material.module';
import { ListfundeddonorsComponent } from './listfundeddonors/listfundeddonors.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminHomeComponent, RaisefundComponent, UpdatefundComponent, ListdonorComponent, ListfundeddonorsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class AdminModule { }
