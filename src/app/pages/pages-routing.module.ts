import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    //libro - este sera el componente que cargara inicialmente
    path: '',
    loadChildren:()=>import('./libro/libro.module').then((e)=>e.LibroModule)
  },
  {
    path:'autor',
    loadChildren:()=>import('./autor/autor.module').then((e)=>e.AutorModule)
  },
  {
    path: 'lector',
    loadChildren:()=>import('./lector/lector.module').then((e)=>e.LectorModule)
  },
  {
    path: 'alquiler',
    loadChildren:()=>import('./alquiler/alquiler.module').then((e)=>e.AlquilerModule)
  },
  {
    path: 'categoria',
    loadChildren:()=>import('./categoria/categoria.module').then((e)=>e.CategoriaModule)
  },
  {
    path: 'editorial',
    loadChildren:()=>import('./editorial/editorial.module').then((e)=>e.EditorialModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
