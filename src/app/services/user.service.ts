import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
    private isUserLoggedIn: boolean;
    private username: string;
    constructor() {
      this.isUserLoggedIn = false;
    }
    setUsernameLoggedIn() {
      this.isUserLoggedIn = true;
    }
    setUsername(username: string) {
      this.username = username;
    }
    getUsername() {
      return this.username;
    }
    getUsernameLoggedIn() {
      return this.isUserLoggedIn;
    }
}