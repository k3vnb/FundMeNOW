import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css'],
  providers: [RequestService]
})
export class RequestDetailComponent implements OnInit {
  requestId: string;
  requestToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private requestService: RequestService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.requestId = urlParameters['id'];
    });
    this.requestToDisplay = this.requestService.getRequestById(this.requestId);
  }

}
