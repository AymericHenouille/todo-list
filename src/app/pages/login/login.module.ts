import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from "./login-routing.module";
import { SignupComponent } from './login-page/signup/signup.component';
import { SigninComponent } from './login-page/signin/signin.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [SigninComponent, SignupComponent, LoginPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
