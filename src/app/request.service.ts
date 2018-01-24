import { Injectable } from '@angular/core';
import { Request } from './request.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class RequestService {
  requests: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.requests = database.list('requests');
 }

  getRequests() {
    return this.requests;
  }
}
