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

  addRequest(newRequest: Request) {
    this.requests.push(newRequest);
  }

  getRequestById(requestId: string) {
    return this.database.object('/requests/' + requestId);
  }


  updateRequest(localUpdatedRequest){
  var requestEntryInFirebase = this.getRequestById(localUpdatedRequest.$key);
  requestEntryInFirebase.update({title: localUpdatedRequest.title,
                              username: localUpdatedRequest.username,
                              email: localUpdatedRequest.email,
                              description: localUpdatedRequest.description,
                              amount_requested: localUpdatedRequest.amount_requested});
  }

  deleteRequest(localRequestToDelete){
    var requestEntryInFirebase = this.getRequestById(localRequestToDelete.$key);
    requestEntryInFirebase.remove();
  }


  donateToRequest(localUpdatedRequest) {
    var requestEntryInFirebase = this.getRequestById(localUpdatedRequest.$key);
    var donationAmount = 100; //come from a form Input
    localUpdatedRequest.amount_collected += donationAmount;
    console.log(localUpdatedRequest.amount_collected);
    requestEntryInFirebase.update({amount_collected: localUpdatedRequest.amount_collected});
  }

  // donateToRequest(localUpdatedRequest){
  // var requestEntryInFirebase = this.getRequestById(localUpdatedRequest.$key);
  // requestEntryInFirebase.update({
  //                             amount_requested: '50'});
  // }
}
