import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { Request } from '../request.model';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-progress-bar',
  providers: [RequestService],
  template: `
  <div class="progress">
    <div class="progress-bar"
        role="progressbar"
        [attr.aria-valuenow]="getProgress()"
        aria-valuemin="0"
        [attr.aria-valuemax]="getProgress()" [ngStyle]="{ width: getProgress() + '%' }">
    </div>
</div>
  `
})

export class ProgressBarComponent {
    requests: FirebaseListObservable<any[]>;
    @Input() selectedRequest;
    requestId: string;
    requestToDisplay;
    value = 100;

    @Input()
    max = 65;

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

    getProgress() {
        if (this.max === 0)
            return 0;

        return this.value / this.max * 100;
    }

}

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProgressBarComponent
    ],
    exports: [
        ProgressBarComponent
    ]

})




export class ProgressBarModule {

}
