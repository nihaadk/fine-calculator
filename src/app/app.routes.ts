import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Fine Calculator',
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
