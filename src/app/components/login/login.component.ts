import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private status: string;
    
    constructor(
        private userService: UserService,
        private router: Router
        ) { }

    ngOnInit() { }

    logIn(email: string, password: string): void {
        this.userService.logIn(email, password).subscribe(status => {
            sessionStorage.setItem('status', status['status']);
            if(sessionStorage.getItem('status') == 'logged') {
                this.router.navigate(['/categories']);
            } else {
                alert('Wrong email or password');
            }
        });
    }
}