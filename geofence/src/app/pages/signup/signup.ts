import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
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
  signupform: FormGroup;
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
  
  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      contact: new FormControl('', [Validators.required, Validators.pattern('[7-9]{1}[0-9]{9}')]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }
  
}
