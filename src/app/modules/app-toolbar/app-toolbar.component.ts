import { Component, OnInit } from '@angular/core';
import { guestLinks, userLinks, adminLinks } from '../../shared/UserRoutes';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserType } from 'src/app/models/user-type';

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
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
      if (value) {
        const userType = this.userService.user.type;
        if (userType === UserType.ADMIN) {
          this.links = adminLinks;
        } else {
          this.links = userLinks;
        }
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
