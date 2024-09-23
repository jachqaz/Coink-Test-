import {Component, OnInit} from '@angular/core';
import {paths} from "../../app-routing.module";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-data-sign-up',
  templateUrl: './account-data-sign-up.page.html',
  styleUrls: ['./account-data-sign-up.page.scss'],
})
export class AccountDataSignUpPage implements OnInit {
  protected readonly String = String;
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
  });

  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  goToTermsPage() {
    this.router.navigateByUrl(paths.termsSignUp.toString());
  }
}
