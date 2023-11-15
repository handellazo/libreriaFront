import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { AutorModule } from './autor/autor.module';
import { LectorModule } from './lector/lector.module';
import { LibroModule } from './libro/libro.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { EditorialModule } from './editorial/editorial.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CommonModule,
    RouterModule,
    AutorModule,
    LectorModule,
    LibroModule,
    SharedModule,
    EditorialModule
  ],
  exports:[
    PagesRoutingModule
  ]
})
export class PagesModule { }
