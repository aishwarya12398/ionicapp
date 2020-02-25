import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage {
  
  constructor(public activeRoute:ActivatedRoute) { }
  ngOnInit() {}

  }
