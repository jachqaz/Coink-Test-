import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

export enum paths {
  auth, phoneSignUp, formSignUp
}
const routes: Routes = [
  {
    path: '',
    redirectTo: paths.phoneSignUp.toString(),
    pathMatch: 'full'
  },
  {
    path: paths.auth.toString(),
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: paths.phoneSignUp.toString(),
    loadChildren: () => import('./phone-sign-up/phone-sign-up.module').then(m => m.PhoneSignUpPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
