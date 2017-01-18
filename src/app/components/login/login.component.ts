import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private status: string;
    
    constructor(private userService: UserService) { }

    ngOnInit() { }

    logIn(email: string, password: string): void {
        this.userService.logIn(email, password).subscribe(status => localStorage.setItem('status', status['status']));
    }
}