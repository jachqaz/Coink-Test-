import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Paths} from "../../app-routing.module";
import {UserService} from "../../../data/services/user.service";

@Component({
  selector: 'app-phone-sign-up',
  templateUrl: './phone-sign-up.page.html',
  styleUrls: ['./phone-sign-up.page.scss'],
})
export class PhoneSignUpPage implements OnInit {
  number: string = '';

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  write(number: number) {
    if (this.number.length < 10) {
      this.number += number;
    }
  }

  delete() {
    if (this.number.length > 0) {
      this.number = this.number.slice(0, -1);
    }
  }

  protected readonly String = String;

  submit() {
    if (this.number.length === 10) {
      this.userService.user.phoneNumber = this.number;
      this.router.navigateByUrl(Paths.accountDataSignUp.toString());
    }
  }
}
