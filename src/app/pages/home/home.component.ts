import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent {
  constructor(private router : Router) {}

  logout() {
    // Clear user authentication data (if applicable)
    // For example: localStorage.removeItem('token');

    // Redirect to the login page
    this.router.navigate(['/login'])
  }
}
