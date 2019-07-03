import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {
  isActivated = false;
  isError = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(({ token }) => {
      this.authService.activateUser(token)
        .subscribe(
          () => {
            this.isActivated = true;
          },
          (err) => {
            if (err) {
              this.isError = true;
            }
          }
        );
    });
  }

}
