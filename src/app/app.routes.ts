import { Routes } from '@angular/router';
import { authRoutes } from './components/auth/auth.routes';
import { homeRoutes } from './components/home/home.routes';

export const routes: Routes = [
  ...authRoutes,
  ...homeRoutes
];
