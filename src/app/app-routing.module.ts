import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

export enum paths {
  auth, phoneSignUp, accountDataSignUp, termsSignUp
}
const routes: Routes = [
  {
    path: '',
    redirectTo: paths.accountDataSignUp.toString(),
    pathMatch: 'full'
  },
  {
    path: paths.auth.toString(),
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: paths.phoneSignUp.toString(),
    loadChildren: () => import('./pages/phone-sign-up/phone-sign-up.module').then(m => m.PhoneSignUpPageModule)
  },
  {
    path: paths.accountDataSignUp.toString(),
    loadChildren: () => import('./pages/account-data-sign-up/account-data-sign-up.module').then(m => m.AccountDataSignUpPageModule)
  },
  {
    path: paths.termsSignUp.toString(),
    loadChildren: () => import('./pages/terms-sign-up/terms-sign-up.module').then(m => m.TermsSignUpPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
