import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    loadComponent: () => import('./app.component').then(c => c.AppComponent)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.component').then(c => c.MainComponent)
  },
  {
    path: '',
    redirectTo: '/login', // Redirect to login by default
    pathMatch: 'full'
  }
  // You can add more routes here
];
