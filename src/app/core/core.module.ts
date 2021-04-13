import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FootBarComponent } from './components/foot-bar/foot-bar.component';
import { FireModule } from './fire/fire.module';
import { AuthService } from './services/auth.service';
import { IsLoggedGuard } from './guards/is-logged.guard';

@NgModule({
  declarations: [
    NavBarComponent,
    FootBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FireModule
  ],
  exports: [
    NavBarComponent,
    FootBarComponent
  ],
  providers: [ AuthService, IsLoggedGuard ]
})
export class CoreModule { }
