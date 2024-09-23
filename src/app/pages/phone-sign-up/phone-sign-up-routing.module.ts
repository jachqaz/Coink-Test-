import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PhoneSignUpPage} from './phone-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneSignUpPageRoutingModule {
}
