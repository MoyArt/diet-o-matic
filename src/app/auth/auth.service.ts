import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
@Injectable()

export class AuthService{
    authChange = new Subject<boolean>();
    private user: User;
    constructor(private router:Router){}

    registerUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.loginSuccess()
    };
    loginUser(authData: AuthData){
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.loginSuccess()
    };
    logout(authData: AuthData){
        console.log('Abrazos no balazos')
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    };
    getUser(){
        return {...this.user};
    };
    isAuth(){
        return this.user != null;
    }
    loginSuccess(){
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}