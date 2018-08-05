
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {HttpErrorResponse} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';

import {IUserLogin,IToken } from '../../shared/interfaces';
import {AppSettings} from '../../shared/appSettings' 



@Injectable()
export class AuthService {
private IsUserLoggedIn = new BehaviorSubject<boolean>(false);
get isLoggedIn() {
    return this.IsUserLoggedIn.asObservable(); 
  }

constructor(private http:HttpClient, private router: Router){

}

Login(user : IUserLogin) : Observable<IToken>{
    var header = new HttpHeaders({'Content-Yype' : 'application/x-www-form-urlencoded'});
    var data = 'grant_type=password&username=' + user.email + '&password=' + user.password;
    
return this.http.post(AppSettings.API_TOKEN_ENDPOINT + 'token',data,{headers : header})
         .pipe(
             map(res=> {
                  var result = res as IToken;
                  this.IsUserLoggedIn.next(true);
                  return result;
             }), catchError(this.handleError)
         );
}

LogOut(){

    this.IsUserLoggedIn.next(false);
    this.router.navigate(['']);
}

private handleError(error: HttpErrorResponse) {
    console.error('server error:', error.message);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Server error');
}
}