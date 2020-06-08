import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController, NavController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';
import { Constants } from './constants';
import { HttpClient } from '@angular/common/http';
import { UserContext } from './user-context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  message = null;
  appPages = [
    {
      title: 'Add Watchers',
      url: '/app/tabs/schedule',
      icon: 'person-add'
    },
    {
      title: 'View Watchers',
      url: '/app/tabs/speakers',
      icon: 'eye'
    },
    {
      title: 'Upload Location',
      url: '/upload',
      icon: 'contacts'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];

  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private http: HttpClient,
    public uc: UserContext,
    private navController: NavController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    window.setInterval(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log('Got location', pos.coords.longitude, pos.coords.latitude);
        console.log(this.uc.user);
        if (this.uc.user) {
          console.log('Sending location');
          const userid = this.uc.user['userid'];

          this.http.post(Constants.BASE_URL + '/addLocationWithLocationlog', {
            userid: userid,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            triggeredstatus: this.uc.triggeredStatus
          }).subscribe((res) => {
            console.log(res);
          });
        }
      });
    }, 60000);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  logout() {
    this.http.post(Constants.BASE_URL + "/logout", { userid: this.uc.user['userid'], token: this.uc.token }).subscribe((result) => {
      console.log("Result", result);
      
      if (result['status'] === 'success') {
        this.uc.loggedIn = false;
        this.uc.user = null;
        this.uc.token = null;
        this.message="Logout Successfully";
        
        this.navController.navigateRoot('/login');
        return;
      }
      else {
          this.message="Logout Failed";

      }
    });
  }


  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
