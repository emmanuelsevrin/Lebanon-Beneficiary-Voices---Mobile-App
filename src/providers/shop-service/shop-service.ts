import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ShopServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopServiceProvider {
	current_location: any = [];
  constructor(public http: Http) {
    console.log('Hello ShopServiceProvider Provider');
  }

  getShops(){
  	var url = '/app/api/shops/list/all';
  	var response = this.http.get(url).map(res => res.json());
  	return response;
  }
}
