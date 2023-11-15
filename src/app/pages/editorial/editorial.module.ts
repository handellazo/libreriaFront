import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialRoutingModule } from './editorial-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { EditorialService } from 'src/app/services/editorial.service';
import { EditorialComponent } from './editorial.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EditorialRoutingModule
  ],
  providers:[
    EditorialService
  ]
})
export class EditorialModule { }
