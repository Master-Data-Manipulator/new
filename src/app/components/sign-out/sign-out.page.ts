import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.page.html',
  styleUrls: ['./sign-out.page.scss'],
})
export class SignOutPage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.SignOut();
  }

}
