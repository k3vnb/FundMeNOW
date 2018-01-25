import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { Request } from '../request.model';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css'],
  providers: [RequestService]
})
export class RequestDetailComponent implements OnInit {
  requests: FirebaseListObservable<any[]>;

  @Input() selectedRequest;

  requestId: string;
  requestToDisplay;
  requestToUpdate;


  constructor(private route: ActivatedRoute, private location: Location, private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.requestId = urlParametersArray['id'];
    });
    this.requestService.getRequestById(this.requestId).subscribe(dataLastEmittedFromObserver => {
      this.requestToDisplay = dataLastEmittedFromObserver;
      return this.requestToDisplay;
    })
  }

  beginDonation(requestToDisplay) {
    console.log("hello");
    console.log(this.requestToDisplay);
    this.requestService.donateToRequest(this.requestToDisplay);
  }

}
