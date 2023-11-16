import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
    loadChildren: ()=> import('./pages/pages.module').then((e)=>e.PagesModule)
  },
  {
    path: '',
    component:AuthComponent,
    loadChildren: ()=> import('./auth/auth.module').then((e)=>e.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
