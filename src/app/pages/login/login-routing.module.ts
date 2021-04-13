import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './login-page/signup/signup.component';
import { SigninComponent } from './login-page/signin/signin.component';

const routes: Routes = [
    { path: 'signin', component: SigninComponent, data: { animation: 'signin' } },
    { path: 'signup', component: SignupComponent, data: { animation: 'signup' } },
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule { }
