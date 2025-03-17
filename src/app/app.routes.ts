import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'peliculas',
    loadComponent: () => import('./peliculas/peliculas.page').then( m => m.PeliculasPage)
  },
];
