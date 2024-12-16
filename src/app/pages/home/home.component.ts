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
    this.router.navigate(['/login'])
  }
}
