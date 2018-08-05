import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../core/services/logger.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {AuthService} from '../core/services/auth.service';
import { IUserLogin, IToken } from '../shared/interfaces';

@Component({
    selector: 'cm-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})

export class LoginComponent  implements OnInit {
    

    loginForm : FormGroup;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private route : Router,
                private logger: LoggerService){}

ngOnInit(){
    this.buildFormValidation();    
}             
 
buildFormValidation(){
    this.loginForm = this.formBuilder.group({
        email:['',Validators.required],
        password:['',Validators.required]
    })
}

submit({ value, valid }: { value: IUserLogin, valid: boolean }){
    if(valid){
        this.authService.Login(value).subscribe(x=> {
            
            localStorage.setItem('token', x.access_token);
            this.route.navigate(['/admin']);
        })
    }
}

}