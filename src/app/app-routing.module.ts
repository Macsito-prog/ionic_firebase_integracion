import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    ...canActivate(()=>redirectUnauthorizedTo(['/home'])),
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    
  },
  {
    path: 'mapa',
    loadChildren: () => import('./tarjetas/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./tarjetas/youtube/youtube.module').then( m => m.YoutubePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
