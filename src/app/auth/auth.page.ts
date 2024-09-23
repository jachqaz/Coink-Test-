import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {paths} from "../app-routing.module";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToPhonePage() {
    this.router.navigateByUrl(paths.phoneSignUp.toString());
  }
}
