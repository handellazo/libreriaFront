import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquilerComponent } from './alquiler.component';

const routes: Routes = [
  {
    path:'',
    component: AlquilerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquilerRoutingModule { }
