import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, NavController } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';
import { UserContext } from '../../user-context';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../constants';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  public watchers = null;

  public enabled = false;

  constructor(public router: Router, 
    private http: HttpClient, 
    private uc: UserContext, 
    private navController: NavController, 
    private activateRoute: ActivatedRoute
    ) {}
    onRemove(name:String)
    {
      let request = {};
      request['userid'] = this.uc.user['userid'];
      request['watchername'] = name;
      this.http.post(Constants.BASE_URL + "/removeWatcher",request).subscribe((result) => {
        console.log("Result", result);
        this.fetchWatchers();         
      });
   
    }

    ngOnInit() {
      if (!this.uc.user) {
        this.navController.navigateRoot('/login');
        return;
      }
      this.fetchWatchers();
    }

    public fetchWatchers(){
      let request = {};
      request['userid'] = this.uc.user['userid'];
      this.http.post(Constants.BASE_URL + "/getWatchers", request).subscribe((result) => {
        console.log("Result", result);
        let watchers = result['List'];
        for (let w of watchers) {
          w.enabled = w.enabled === 0 ? false : true;
        }
        this.watchers = watchers;
      });
  
    }
  
}
