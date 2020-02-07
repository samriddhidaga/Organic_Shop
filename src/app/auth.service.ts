import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Observable<User>;

  constructor(private afAuth : AngularFireAuth,private afs : AngularFirestore,private router : Router,
              private route : ActivatedRoute) {
    this.user=this.afAuth.authState.pipe(switchMap(user=>{
      if(user){
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      }else{
        return of(null);
      }
    }))
   }
   googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
   }
   oAuthLogin(provider){
    // let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    // localStorage.setItem('returnUrl',returnUrl);
    // this.router.navigate(['/course-list']);
     return this.afAuth.auth.signInWithPopup(provider).
     then((credential)=>{
       this.updateUserData(credential.user);
       this.router.navigate(['/course-list']);
       console.log("Successfully logged in");             
     }).catch((error)=>{
       console.log("Error",error);
     })
   }
   updateUserData(user){
     const userRef : AngularFirestoreDocument<User>=this.afs.doc(`users/${user.uid}`);
     const data: User={
       displayName:user.displayName,
       email:user.email,
     }
     return userRef.set(data)
   }
   signOut(){
     this.afAuth.auth.signOut().then(()=>{
       console.log("Successfully signed out");
       this.router.navigate(['/login']);
     }).catch((error)=>{
       console.log("Error",error);
     });
   }
}
