import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TermsSignUpPageRoutingModule} from './terms-sign-up-routing.module';

import {TermsSignUpPage} from './terms-sign-up.page';
import {HeaderComponent} from "../../components/header/header.component";
import {OinkContentComponent} from "../../components/oink-content/oink-content.component";
import {ModalComponent} from "./components/modal/modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsSignUpPageRoutingModule,
    HeaderComponent,
    OinkContentComponent
  ],
  declarations: [TermsSignUpPage, ModalComponent]
})
export class TermsSignUpPageModule {
}
