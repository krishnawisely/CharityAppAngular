import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { MaterialModule } from 'src/app/layout/material/material.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DonorLayoutComponent } from './layout/donor-layout/donor-layout.component';
import { AdminService } from './core/admin/admin.service';

import { HttpClientModule } from '@angular/common/http';
import { DonorService } from './core/donor/donor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AdminLayoutComponent,
    DonorLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AdminService,
    DonorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
