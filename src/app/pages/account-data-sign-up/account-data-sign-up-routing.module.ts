import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccountDataSignUpPage} from './account-data-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: AccountDataSignUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountDataSignUpPageRoutingModule {
}
