import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { LoginService } from "../services/login.service";

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  muser: string;
  mpass: string;
  username: string;
  password: string;
  loginData = {
    "username": String,
    "password": String
  }
  constructor(private router: Router, private userService: UserService,
    private loginService: LoginService) {

  }

  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    this.loginData.username = e.target.elements[0].value;
    this.loginData.password = e.target.elements[1].value;
    this.loginService.login(this.loginData);
  }
  mouseOutUser(e) {
    this.username = e.target.value;
    if (this.username === "") {
      this.muser = "Username is empty";
    } else {
      this.muser = null;
    }
  }
  mouseOutPass(e) {
    this.password = e.target.value;
    if (this.username === "") {
      this.mpass = "Enter your password.";
    }
    else {
      this.mpass = null;
    }
  }
}
