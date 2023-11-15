import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    CategoriaRoutingModule
  ],
  providers:[
  ]
})
export class CategoriaModule { }
