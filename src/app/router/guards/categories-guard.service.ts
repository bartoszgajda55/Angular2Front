import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class CategoriesGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if(sessionStorage.getItem('id')) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}