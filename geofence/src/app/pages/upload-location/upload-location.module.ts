import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, NgForm } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadLocationPageRoutingModule } from './upload-location-routing.module';

import { UploadLocationPage } from './upload-location.page';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserContext } from '../../user-context';
import { Constants } from '../../constants';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadLocationPageRoutingModule
  ],
  declarations: [UploadLocationPage]
})
export class UploadLocationPageModule {
}
