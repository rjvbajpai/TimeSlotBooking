import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'

import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomersModule } from './customers/customers.module'
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule,
    CoreModule,
    AdminModule,
    CustomersModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
