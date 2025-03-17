import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

const routes: Routes = [
  {path: '',component:LoginPageComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'servicios-escolares',
    loadChildren: () => import('./servicios-escolares/servicios-escolares.module').then( m => m.ServiciosEscolaresModule),
  },
  {

    path: 'estudiantes',
    loadChildren: () => import('./estudiantes/estudiantes.module').then( m => m.EstudiantesModule),
  },
  {

    path: 'profesor-ext',
    loadChildren: () => import('./profesor-ext/profesor-ext.module').then( m => m.ProfesorExtModule),
  },
  {

    path: 'profesor-clase',
    loadChildren: () => import('./profesor-clase/profesor-clase.module').then( m => m.ProfesorClaseModule),
  },
  {

    path: '404',
    component: Error404PageComponent,
  },
  {
    path: ' ',
    redirectTo: 'servicios-escolares',
    pathMatch: 'full'
  },
  {
    path: ' ',
    redirectTo: 'profesor-ext',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
