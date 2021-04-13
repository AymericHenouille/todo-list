import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [
  MatToolbarModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ]
})
export class MaterialModule { }
