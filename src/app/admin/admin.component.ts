import { Component, OnInit } from '@angular/core';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(category: string, title: string, username: string, email: string, description: string, amount_requested: number, amount_collected: number) {
    var newRequest: Request = new Request(category, title, username, email, description, amount_requested, amount_collected);
    console.log(newRequest);
  }

}
