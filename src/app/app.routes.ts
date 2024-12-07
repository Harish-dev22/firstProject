import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: '**',           // Wildcard route for invalid paths
    redirectTo: 'register'   // Redirects to login component
  }
];
