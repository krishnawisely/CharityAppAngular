import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { ContributeComponent } from './contribute/contribute.component';

const routes: Routes = [
  {
    path:'donorhome',
    component: DonorHomeComponent
  },
  {
    path:'contribute',
    component: ContributeComponent
  },
  {
    path:'',
    redirectTo:'donorhome',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonorRoutingModule { }
