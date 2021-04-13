import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class AuthService {

  private readonly USERS_COLLECTION: string = 'users';

  public user$: Observable<User>;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {
    this.user$ = this.auth.authState.pipe(map(fireUser => fireUser.uid), switchMap(uid =>
      this.firestore.collection<User>(this.USERS_COLLECTION).doc(uid).snapshotChanges().pipe(
        map(user => ({id: uid, ...user.payload.data()}))
      )));
  }

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
        .then((userCredential) => {
          const id: string = userCredential?.user?.uid;
          const user: User = {name, email};
          this.firestore.collection(this.USERS_COLLECTION).doc(id).set(user)
            .then(() => resolve())
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }

  public isLogged(): Observable<boolean> {
    return this.auth.authState.pipe(map(user => !!user));
  }

  public logout(): Promise<void> {
    return this.auth.signOut();
  }

}
