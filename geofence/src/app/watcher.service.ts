import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatcherService {

  public watcherList = [
    { watcherid: 1, name: 'abcd1', contact: '1001', email: 'email5@gmail.com', enabled: true },
    { watcherid: 2, name: 'abcd2', contact: '1002', email: 'email4@gmail.com', enabled: false },
    { watcherid: 3, name: 'abcd3', contact: '1003', email: 'email2@gmail.com', enabled: false },
    { watcherid: 4, name: 'abcd4', contact: '1004', email: 'email1@gmail.com', enabled: true }
  ];

  constructor() { }

}
