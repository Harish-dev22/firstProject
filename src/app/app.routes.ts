import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent, // Use AuthLayout for these routes
    children: [
        { path: '', redirectTo:'register', pathMatch:'full' },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: '**', redirectTo: 'register' }
    ]
},
  {
    path: '',
    component: LayoutComponent, // Use Layout for the Home component
    children: [
        { path: 'home', component: HomeComponent }, // Home route
        // Other routes that should use LayoutComponent can go here
    ]
},
 // Redirect to home for unknown routes
];
