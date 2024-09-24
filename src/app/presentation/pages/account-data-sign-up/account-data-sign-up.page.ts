import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Paths} from "../../app-routing.module";
import {UserService} from "../../../data/services/user.service";
import {User} from "../../../domain/models/user";

@Component({
  selector: 'app-account-data-sign-up',
  templateUrl: './account-data-sign-up.page.html',
  styleUrls: ['./account-data-sign-up.page.scss'],
})

export class AccountDataSignUpPage implements OnInit {
  protected readonly String = String;
  user: User = this.userService.user;
  userForm: FormGroup = new FormGroup({
    typeDocument: new FormControl(''),
    numberDocument: new FormControl(''),
    expeditionDate: new FormControl(''),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    // emailRepeat: new FormControl(''),
    password: new FormControl(''),
    // passwordRepeat: new FormControl(''),
    emailRepeat: new FormControl('', (control: AbstractControl) => {
      return control.value !== this.user.email ? {'mismatch': true} : null;
    }),
    passwordRepeat: new FormControl('', (control: AbstractControl) => {
      return control.value !== this.user.password ? {'mismatch': true} : null;
    }),
  });
  typeDocuments: string[] = [
    'Tarjeta de identidad', 'Cédula de ciudadanía', 'Cédula de extranjería',
  ];
  genders: string[] = [
    'Femenino', 'Masculino',
  ];

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }


  goToTermsPage() {
    this.router.navigateByUrl(Paths.termsSignUp.toString());
  }

}
