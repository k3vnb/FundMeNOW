import { Component, Input, OnInit } from '@angular/core';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css'],
  providers: [RequestService]
})
export class EditRequestComponent implements OnInit {
  @Input() selectedRequest;


  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  beginUpdatingRequest(requestToUpdate){
    this.requestService.updateRequest(requestToUpdate);
  }

  beginDeletingRequest(requestToDelete){
    if(confirm("Are you sure you want to delete this request?")) {
      this.requestService.deleteRequest(requestToDelete);
    }
  }

  // beginDonation(requestToUpdate) {
  //   console.log("hello" + requestToUpdate);
  //   this.requestService.donateToRequest(requestToUpdate);
  //
  //   // console.log(x);
  // }

}
