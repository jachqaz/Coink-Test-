import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PhoneSignUpPageRoutingModule} from './phone-sign-up-routing.module';

import {PhoneSignUpPage} from './phone-sign-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneSignUpPageRoutingModule,
  ],
  declarations: [PhoneSignUpPage]
})
export class PhoneSignUpPageModule {
}
