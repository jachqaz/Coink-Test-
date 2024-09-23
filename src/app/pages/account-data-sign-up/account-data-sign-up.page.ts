import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Paths} from "../../app-routing.module";

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
  typeDocuments: string[] = [
    'Tarjeta de identidad', 'Cédula de ciudadanía', 'Cédula de extranjería',
  ];
  genders: string[] = [
    'Femenino', 'Masculino',
  ];
  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  goToTermsPage() {
    this.router.navigateByUrl(Paths.termsSignUp.toString());
  }
}
