import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService
  ) {
    if (userService.user) {
      this.user = userService.user;
    }
  }

  ngOnInit() {
    if (!this.user) {
      this.userService.getUser()
        .subscribe(({ data }) => {
          this.user = data;
        });
    }
  }

}
