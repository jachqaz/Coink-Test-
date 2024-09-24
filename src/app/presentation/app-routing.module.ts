import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

export class Paths {
  static readonly auth = 'auth';
  static readonly phoneSignUp = 'phoneSignUp';
  static readonly accountDataSignUp = 'accountDataSignUp';
  static readonly termsSignUp = 'termsSignUp';
}
const routes: Routes = [
  {
    path: '',
    redirectTo: Paths.accountDataSignUp.toString(),
    pathMatch: 'full'
  },
  {
    path: Paths.auth.toString(),
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: Paths.phoneSignUp.toString(),
    loadChildren: () => import('./pages/phone-sign-up/phone-sign-up.module').then(m => m.PhoneSignUpPageModule)
  },
  {
    path: Paths.accountDataSignUp.toString(),
    loadChildren: () => import('./pages/account-data-sign-up/account-data-sign-up.module').then(m => m.AccountDataSignUpPageModule)
  },
  {
    path: Paths.termsSignUp.toString(),
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
