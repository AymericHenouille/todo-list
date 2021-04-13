import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user$: Observable<User>;
  logged$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.logged$ = this.authService.isLogged();
  }

  public logout(): void {
    this.authService.logout().then(() =>
      this.router.navigate(['/login']));
  }

}
