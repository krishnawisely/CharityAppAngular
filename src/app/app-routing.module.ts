import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DonorLayoutComponent } from './layout/donor-layout/donor-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeLayoutComponent,
    children:[
      {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children:[
      {
        path: '',
        loadChildren: './modules/admin/admin.module#AdminModule'
      }
    ]
  },
  {
    path: 'donor',
    component: DonorLayoutComponent,
    children:[
      {
        path: '',
        loadChildren: './modules/donor/donor.module#DonorModule'
      }
    ]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
