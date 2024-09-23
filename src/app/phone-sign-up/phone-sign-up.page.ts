import {Component, OnInit} from '@angular/core';
import {paths} from "../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-phone-sign-up',
  templateUrl: './phone-sign-up.page.html',
  styleUrls: ['./phone-sign-up.page.scss'],
})
export class PhoneSignUpPage implements OnInit {
  defaultHref = paths.auth.toString();
  number: string = '';

  constructor(private router: Router) {
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

  submit() {
    this.router.navigateByUrl(paths.formSignUp.toString());

  }
}
