import { NgModule } from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";
import { CommonModule } from '@angular/common';  

import {AuthService} from '../core/services/auth.service';
import {LoggerService} from '../core/services/logger.service';

@NgModule({

    imports: [ReactiveFormsModule, CommonModule],
    declarations: [LoginComponent],
    providers : [AuthService,LoggerService]
})
export class LoginModule { }