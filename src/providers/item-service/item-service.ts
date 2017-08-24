import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import Echo from "laravel-echo";

/*
  Generated class for the ItemServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
declare global {
    interface Window { Echo: any; }
}

@Injectable()
export class ItemServiceProvider {

  private url = 'http://voices.app:6001'; 
  socket = io(this.url);

  constructor(public http: Http) {
    console.log('Hello ItemServiceProvider Provider');
  }

  getNewItems() {
    let observable = new Observable(observer => {

      window.Echo = new Echo({
        authEndpoint: 'http://voices.app/api/broadcasting/auth',
        key: "9b3077af4b397229d472eb4842644bfe",
        broadcaster: 'socket.io',
        host: 'http://voices.app:6001'
      });

      var data = window.Echo.channel("item-created")
      .listen('ItemCreated', function(data) {
        observer.next(data.item);
      })
      // this.socket.on('connect',function() {
      //   console.log('Client has connected to the server!');
      // });

      // this.socket.on('App\Events\TestEvent', function(data){
      //   console.log(data);
      // });
    })    
    return observable;
  } 

  getTopItems(){
  	var url = '/app/api/items/list/prices/top';
  	var response = this.http.get(url).map(res => res.json());
  	return response;
  }


}
