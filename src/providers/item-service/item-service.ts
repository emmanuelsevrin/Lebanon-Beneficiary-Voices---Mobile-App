import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItemServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class ItemServiceProvider {

  private url = 'http://voices.app:6001'; 
  // socket = io(this.url);

  constructor(public http: Http) {
    console.log('Hello ItemServiceProvider Provider');
  }

  getTopItems(){
  	var url = '/app/api/items/list/prices/top';
  	var response = this.http.get(url).map(res => res.json());
  	return response;
  }


}
