import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectorRoutingModule } from './lector-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LectorService } from 'src/app/services/lector.service';
import { LectorComponent } from './lector.component';


@NgModule({
  declarations: [
    LectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    LectorRoutingModule
  ],
  providers: [
    LectorService
  ]
})
export class LectorModule { }
