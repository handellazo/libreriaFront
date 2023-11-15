import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquilerRoutingModule } from './alquiler-routing.module';
import { AlquilerComponent } from './alquiler.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlquilerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    AlquilerRoutingModule
  ],
  providers:[
  ]
})
export class AlquilerModule { }
