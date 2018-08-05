import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({

    selector:'cm-header',
    templateUrl: 'header.component.html'

//providers: [Router]
})

export class HeaderComponent implements OnInit {
    loginLogoutText = 'Login';
    isLoggedIn : Observable<boolean>;

    constructor(private router:Router, private authService : AuthService) {
        
     }

     ngOnInit(){
        this.isLoggedIn =  this.authService.isLoggedIn;
     }

     login() {
        this.redirectToLogin();    
    }
    logout(){
       localStorage.removeItem('token');
       this.authService.LogOut(); 
    }
    redirectToLogin() {
        this.router.navigate(['/login']);
    }
}

