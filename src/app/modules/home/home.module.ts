import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { MaterialModule } from 'src/app/layout/material/material.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent, SigninPageComponent, SignupPageComponent, AdminloginComponent, RegisterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[]
})
export class HomeModule { }
