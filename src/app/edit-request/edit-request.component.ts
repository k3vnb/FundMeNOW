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

}
