import { NgModule} from '@angular/core';
//import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './services/auth.service'
import {LoggerService} from './services/logger.service';

@NgModule({

exports: [HeaderComponent],
declarations: [HeaderComponent],
providers : [AuthService,LoggerService]

})

export class CoreModule {

}