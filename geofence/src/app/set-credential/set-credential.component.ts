import { UserContext } from './../user-context';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'set-credential',
  templateUrl: './set-credential.component.html',
  styleUrls: ['./set-credential.component.scss'],
})
export class SetCredentialComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userContext: UserContext) {

    this.activatedRoute.paramMap.subscribe((params)=>{
      this.userContext.user={};
      this.userContext.user.userid=params['userid'];
      this.userContext.token=params['token'];

    });

   }

  ngOnInit() {}

}
