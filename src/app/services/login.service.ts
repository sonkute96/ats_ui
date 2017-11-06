import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Http, URLSearchParams, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from "../model/user";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { UserService } from './user.service';
@Injectable()
export class LoginService {
  constructor(private _router: Router, private _http: Http, private userService: UserService) {

  }
  private handleData(res: Response) {
    let body = res.json();
    return body;
  }
  login(loginData) {
    let params = new URLSearchParams();
    params.append('username',loginData.username);
    params.append('password',loginData.password);
    params.append('grant_type','password');
    params.append('client_id','fooClientIdPassword');

    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("fooClientIdPassword:secret")});
    let options = new RequestOptions({ headers: headers });
    console.log(params.toString());
     this._http.post('http://localhost:8090/spring-security-oauth-server/oauth/token', params.toString(), options)
    .map(res => res.json())
    .subscribe(
      data => this.saveToken(data),
      err => alert('Invalid Credentials')
    );
    this.userService.setUsername(loginData.username);
  }
  saveToken(token){
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token');
    this._router.navigate(['/ats']);
  }
  checkCredentials(){
    if (!Cookie.check('access_token')){
      this._router.navigate(['/login']);
    }
  }
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
