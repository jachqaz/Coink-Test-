import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TermsSignUpPage} from './terms-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: TermsSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsSignUpPageRoutingModule {
}
