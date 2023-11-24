import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'formpublicar',
    loadChildren: () => import('./pages/formpublicar/formpublicar.module').then( m => m.FormpublicarPageModule)
  },
  {
    path: 'cardmascotas',
    loadChildren: () => import('./pages/cardmascotas/cardmascotas.module').then( m => m.CardmascotasPageModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m =>m.AuthPageModule )
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
