import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
@Injectable()

export class AuthService{
    authChange = new Subject<boolean>();
    private isAuthenticated = false;
    constructor(private router:Router, private afAuth:AngularFireAuth){}

    registerUser(authData: AuthData){
        debugger
        this.afAuth.auth.createUserWithEmailAndPassword(
            authData.email, 
            authData.password
        ).then(result => {
            console.log(result)
            this.loginSuccess()
        }).catch(error => {
            console.log(error)
        })
        
    };
    loginUser(authData: AuthData){
        debugger
        this.afAuth.auth.signInWithEmailAndPassword(
            authData.email, 
            authData.password
        ).then(result => {
            console.log(result)
            this.loginSuccess()
        }).catch(error => {
            console.log(error)
        });
    };
    logout(authData: AuthData){
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
    };
    isAuth(){
        return this.isAuthenticated;
    }
    loginSuccess(){
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}