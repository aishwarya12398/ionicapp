import { UserContext } from './../../user-context';
import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, IonList, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';
import { AddWatcher } from 'I:/BE Project/IonicApp/geofence/src/app/interfaces/add-watcher';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../../constants';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;
  
  watcher: AddWatcher = {userid:'3', name: '', contact: '', email: '' };
  submitted = false;
  message = null;


  

  constructor(
    public router: Router, 
    private http: HttpClient, 
    public activeRoute: ActivatedRoute, 
    public uc:UserContext
  ) { }

  ngOnInit() { }
  
  onAdd(form: NgForm) {
    this.submitted = true;

    
    this.http.post(Constants.BASE_URL + "/addWatcher", this.watcher).subscribe((result) => {
      console.log("Result", result);
      if (result['status'] === 'success') {
        this.message = "Watcher added";
      }
      else {
        this.message = "Failed";
      }
    });
   
  }


 
  

  
}
