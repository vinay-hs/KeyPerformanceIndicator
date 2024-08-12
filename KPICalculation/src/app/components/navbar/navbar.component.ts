import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  shouldDisplayNavbar: boolean;

  constructor(private router: Router){
    this.shouldDisplayNavbar = false;
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.shouldDisplayNavbar = !event.url.includes('');
        this.shouldDisplayNavbar = event.url.includes('dashboard');
        this.shouldDisplayNavbar = event.url.includes('mco');
      }
    })
  }
}
