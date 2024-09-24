import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PhoneSignUpPageRoutingModule} from './phone-sign-up-routing.module';

import {PhoneSignUpPage} from './phone-sign-up.page';
import {HeaderComponent} from "../../components/header/header.component";
import {OinkContentComponent} from "../../components/oink-content/oink-content.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneSignUpPageRoutingModule,
    HeaderComponent,
    OinkContentComponent,
  ],
  declarations: [PhoneSignUpPage]
})
export class PhoneSignUpPageModule {
}
