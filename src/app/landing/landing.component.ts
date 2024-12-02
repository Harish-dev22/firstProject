import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavComponent } from '../shared/nav/nav.component';


@Component({
  selector: 'app-landing',
  imports: [NavComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  phoneNumber: string = '';
  name: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToHome() {
    this.router.navigate(['/home'], {
      queryParams: {
        name: 'John Doe'
      }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.phoneNumber = params.phone;
      this.name = params.username;
    });
  }
}
