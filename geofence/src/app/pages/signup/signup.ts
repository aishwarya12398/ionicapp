import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from './../../constants';
import { HttpClient } from '@angular/common/http';


import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { UserSignup } from '../../interfaces/user-signup';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserSignup = { username: '', password: '', contact: '', email:'' };
  submitted = false;
  message = null;

  constructor(public router: Router, private http: HttpClient) {

  }
  onSignup(form: NgForm) {
    this.submitted = true;

    
    this.http.post(Constants.BASE_URL + "/addUser", this.signup).subscribe((result) => {
      console.log("Result", result);
      if (result['status'] === 'success') {
        this.message = "User registered";
      }
      else {
        this.message = "Failed";
      }
    });
  }
}
