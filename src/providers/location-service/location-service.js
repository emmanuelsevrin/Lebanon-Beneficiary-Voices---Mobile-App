var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
/*
  Generated class for the LocationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocationServiceProvider = (function () {
    function LocationServiceProvider(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation;
        this.current_location = [];
        console.log('Hello LocationServiceProvider Provider');
    }
    LocationServiceProvider.prototype.getCurrentLocation = function () {
        var _this = this;
        return this.geolocation.getCurrentPosition().then(function (my_location) {
            _this.current_location = my_location;
        });
    };
    LocationServiceProvider.prototype.getDistanceToShop = function (shop) {
        var shop_long = shop.longitude;
        var shop_lat = shop.latitude;
        var format = 'json';
        var url = 'https://maps.googleapis.com/maps/api/distancematrix/';
        var location = this.current_location;
        console.log(location);
        var current_long = location.longitude;
    };
    ;
    return LocationServiceProvider;
}());
LocationServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Geolocation])
], LocationServiceProvider);
export { LocationServiceProvider };
//# sourceMappingURL=location-service.js.map