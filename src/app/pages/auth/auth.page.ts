import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Paths} from "../../app-routing.module";

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
    this.router.navigateByUrl(Paths.phoneSignUp.toString());
  }
}
