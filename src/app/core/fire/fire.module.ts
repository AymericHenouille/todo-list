import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

const MODULES = [
  AngularFireAuthModule,
  AngularFirestoreModule,
  AngularFireStorageModule
];

@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ]
})
export class FireModule { }
