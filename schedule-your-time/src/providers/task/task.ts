import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from "../../shared/task";
import { baseURL } from "../../shared/baseurl";
import { ProcessHttpmsgProvider } from "../process-httpmsg/process-httpmsg";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {

  constructor(public http: HttpClient,
              private processHTTPMsgService: ProcessHttpmsgProvider) {
    console.log('Hello TaskProvider Provider');
  }

  getTask(): Observable<Task[]> {
    return this.http.get(baseURL + 'tasks')
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }

}
