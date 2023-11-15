import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibroRoutingModule } from './libro-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LibroComponent } from './libro.component';
import { LibroService } from 'src/app/services/libro.service';


@NgModule({
  declarations: [
    LibroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    LibroRoutingModule
  ],
  providers:[
    LibroService
  ]
})
export class LibroModule { }
