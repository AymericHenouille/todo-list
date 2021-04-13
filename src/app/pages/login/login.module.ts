import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from "./login-routing.module";
import { SignupComponent } from './login-page/signup/signup.component';
import { SigninComponent } from './login-page/signin/signin.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SigninComponent, SignupComponent, LoginPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
