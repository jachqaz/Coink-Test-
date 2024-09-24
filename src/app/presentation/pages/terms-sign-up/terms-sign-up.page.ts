import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-terms-sign-up',
  templateUrl: './terms-sign-up.page.html',
  styleUrls: ['./terms-sign-up.page.scss'],
})
export class TermsSignUpPage implements OnInit {

  checkTerms = false;
  protected readonly String = String;

  constructor() {
  }

  ngOnInit() {
  }
}
