import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserContext {
  token: any;
  user: any;
  loggedIn: boolean = false;
  triggeredStatus:string='';
  dark = false;
}
