import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import {LoginComponent} from './login/login.component'
import {HomeComponent} from './admin/home/home.component';
import { CustomersComponent } from './customers/customers.component'

const app_routes: Routes = [
   
    {path:'login',component: LoginComponent},
    {path:'admin',component: HomeComponent},
    {path:'',pathMatch:'full',component:CustomersComponent},
    {path:'**',pathMatch: 'full',component:CustomersComponent}
]
@NgModule({
imports: [RouterModule.forRoot(app_routes)],
exports: [ RouterModule ]

})

export class AppRoutingModule {}