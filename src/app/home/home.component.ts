import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params: any) => {
      console.log("params", params);
    });
  }

  navigateToLanding() {
    this.router.navigate(['/landing']);
  }
}
