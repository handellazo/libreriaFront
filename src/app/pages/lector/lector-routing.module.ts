import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectorComponent } from './lector.component';

const routes: Routes = [
  {
    path:'',
    component: LectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectorRoutingModule { }
