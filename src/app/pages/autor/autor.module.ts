import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';
import { AutorComponent } from './autor.component';


@NgModule({
  declarations: [
    AutorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    AutorRoutingModule
  ],
  providers:[
    AutorService
  ]
})
export class AutorModule { }
