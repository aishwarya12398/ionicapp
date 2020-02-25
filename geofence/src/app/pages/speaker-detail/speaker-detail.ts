import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { WatcherService } from './../../watcher.service';
import { UserContext } from './../../user-context';
import { Constants } from './../../constants';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss'],
})
export class SpeakerDetailPage {
  
  constructor(
    
  ) {}
  

  
}
