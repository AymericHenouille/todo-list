import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MODULES = [
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
  MatTableModule,
  MatSnackBarModule
];

@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ]
})
export class MaterialModule { }
