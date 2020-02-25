import { Component, ViewEncapsulation } from '@angular/core';
import { UserContext } from './../../user-context';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { Constants } from './../../constants';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  message = null;

  constructor(public router: Router, private http: HttpClient, private uc: UserContext
    ) { }
    onLogin(form: NgForm) {
      this.submitted = true;
  
      this.http.post(Constants.BASE_URL + "/login", this.login).subscribe((result) => {
        console.log("Result", result);
        if (result['status'] === 'success') {
          this.uc.token = result['token'];
          this.uc.user = result['user'];
          this.uc.loggedIn = true;
  
          this.message = "Success";
          
          this.router.navigateByUrl('/app/tabs/schedule');
        }
        else {
          this.message = "Failed";
        }
      });
    }
  
    onSignup() {
      this.router.navigateByUrl('/signup');
    }
  
    ngOnInit() { }
  
  
}
