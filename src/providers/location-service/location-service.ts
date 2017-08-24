import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the LocationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocationServiceProvider {

	current_location : any = [];

  constructor(public http: Http, public geolocation: Geolocation) {
    console.log('Hello LocationServiceProvider Provider');
  }

	getCurrentLocation() {
		return this.geolocation.getCurrentPosition().then(my_location => {
			return my_location;
		});
	}

	getDistanceToShop(my_location, shops) {
		var format = 'json';
		var current_lat = my_location.latitude;
		var current_long = my_location.longitude;
		var url  = '/google/maps/api/distancematrix/' + format + '?origins=' + current_lat + ',' + current_long + '&destinations=';
		
		Array.prototype.forEach.call(shops, shop => {
	    url += '|' + shop.latitude + ',' + shop.longitude;
		});		
		
  	var response = this.http.get(url).map(res => res.json());
  	return response;
	};
}
