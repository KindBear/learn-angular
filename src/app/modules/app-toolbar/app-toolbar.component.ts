import { Component, OnInit } from '@angular/core';
import { guestLinks, userLinks } from '../../shared/UserRoutes';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  links = guestLinks;
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
      if (value) {
        this.links = userLinks;
      } else {
        this.links = guestLinks;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

}
