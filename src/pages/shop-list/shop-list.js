var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ShopServiceProvider } from '../../providers/shop-service/shop-service';
import { LocationServiceProvider } from '../../providers/location-service/location-service';
/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShopListPage = (function () {
    function ShopListPage(navCtrl, navParams, translate, shopService, locationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.shopService = shopService;
        this.locationService = locationService;
        this.shops = [];
        this.current_location = [];
        this.translate.currentLang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';
        // this.shops = this.arrangeShopsByDistance(this.shops);
        // this.nearest_shop = this.shops.shift();
    }
    ShopListPage.prototype.arrangeShopsByDistance = function (shops) {
        shops.sort(this.compare);
        return shops;
    };
    ShopListPage.prototype.compare = function (a, b) {
        if (a.distance < b.distance)
            return -1;
        if (a.distance > b.distance)
            return 1;
        return 0;
    };
    ShopListPage.prototype.getShops = function () {
        var _this = this;
        this.shopService.getShops().subscribe(function (data) {
            _this.shops = data;
        }, function (err) {
            console.log(err);
        }, function () { return console.log('Data Fetched From API'); });
    };
    ShopListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ShopListPage');
        // this.getShops();
        this.locationService.getCurrentLocation().then(function (data) {
            _this.current_location = data;
        });
    };
    return ShopListPage;
}());
ShopListPage = __decorate([
    Component({
        selector: 'page-shop-list',
        templateUrl: 'shop-list.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, TranslateService, ShopServiceProvider, LocationServiceProvider])
], ShopListPage);
export { ShopListPage };
//# sourceMappingURL=shop-list.js.map