import { Component, Input, OnInit } from '@angular/core';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  providers: [RequestService]
})
export class DonateComponent implements OnInit {
  @Input() selectedRequest;


  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  beginDonation(requestToUpdate) {
    console.log("hello");
    console.log(requestToUpdate);
    this.requestService.donateToRequest(requestToUpdate);
  }
}
