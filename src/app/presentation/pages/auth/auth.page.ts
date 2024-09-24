import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Paths} from "../../app-routing.module";
import {UserService} from "../../../data/services/user.service";
import {User} from "../../../domain/models/user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private router: Router, private userService: UserService) {
    this.userService.user = new User();
  }

  ngOnInit() {
  }

  goToPhonePage() {
    this.router.navigateByUrl(Paths.phoneSignUp.toString());
  }
}
