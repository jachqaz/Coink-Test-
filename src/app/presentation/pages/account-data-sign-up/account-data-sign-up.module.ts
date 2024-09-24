import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AccountDataSignUpPageRoutingModule} from './account-data-sign-up-routing.module';

import {AccountDataSignUpPage} from './account-data-sign-up.page';
import {HeaderComponent} from "../../components/header/header.component";
import {OinkContentComponent} from "../../components/oink-content/oink-content.component";
import {MatError, MatFormField} from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountDataSignUpPageRoutingModule,
    HeaderComponent,
    OinkContentComponent,
    ReactiveFormsModule,
    MatFormField,
    MatError,
  ],
  declarations: [AccountDataSignUpPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountDataSignUpPageModule {
}
