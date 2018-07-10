import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService){
        
    }
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        return true;
    }
}