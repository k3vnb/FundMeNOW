import { Component, OnInit } from '@angular/core';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RequestService]
})
export class AdminComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  submitForm(category: string, title: string, username: string, email: string, description: string, amount_requested: number, amount_collected: number) {
    var amount_collected = 0;
    var newRequest: Request = new Request(category, title, username, email, description, amount_requested, amount_collected);
    this.requestService.addRequest(newRequest);

    console.log(newRequest);
  }

}
