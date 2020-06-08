import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserContext } from '../../user-context';
import { Constants } from '../../constants';

@Component({
  selector: 'upload-location',
  templateUrl: './upload-location.page.html',
  styleUrls: ['./upload-location.page.scss'],
})
export class UploadLocationPage implements OnInit {

  submitted = false;
  message = null;
  // uploadform: FormGroup;
  longitude:any = 0.0;
  latitude:any = 0.0;

  constructor(public router: Router, private http: HttpClient, private uc: UserContext
  ) { }

  onUpload() {
    this.submitted = true;

   
        if (this.uc.user) {
          console.log('Sending location');
          const userid = this.uc.user['userid'];

          this.http.post(Constants.BASE_URL + '/addLocationWithLocationlog', {
            userid: userid,
            latitude: this.latitude,
            longitude: this.longitude,
            triggeredstatus: this.uc.triggeredStatus
          }).subscribe((res) => {
            console.log(res);
          });
        }
   

  }

  ngOnInit() {
  }

}
