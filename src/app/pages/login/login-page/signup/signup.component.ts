import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { match } from 'src/app/shared/validators/match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      comfirmPassword: ['', Validators.required]
    }, {
      validators: match('password', 'comfirmPassword')
    })
  }

  public submit(): void {
    const name = this.form.get('name').value;
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.authService.signup(name, email, password).then(() =>
      this.router.navigate(['/todolist']));
  }

}
