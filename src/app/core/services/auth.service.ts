import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class AuthService {

  public user$: Observable<User>;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) { }

  public signin(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }

  public signup(name: string, email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  }

  public isLogged(): Observable<boolean> {
    return this.auth.authState.pipe(first(), map(user => !!user));
  }

}
