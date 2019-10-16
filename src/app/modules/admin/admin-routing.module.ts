import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RaisefundComponent } from './raisefund/raisefund.component';
import { UpdatefundComponent } from './updatefund/updatefund.component';
import { ListdonorComponent } from './listdonor/listdonor.component';
import { ListfundeddonorsComponent } from './listfundeddonors/listfundeddonors.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'raisefund',
    component: RaisefundComponent
  },
  {
    path: 'updatefund',
    component: UpdatefundComponent
  },
  {
    path: 'listdonor',
    component: ListdonorComponent
  },
  {
    path: 'listfundeddonors',
    component: ListfundeddonorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
