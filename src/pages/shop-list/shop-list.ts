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

@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html',
})
export class ShopListPage {

	direction: string;
	shops: any = [];
  nearest_shop: any;
  current_location : any = [];
  shops_info : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService, private shopService: ShopServiceProvider, private locationService: LocationServiceProvider) {
  	this.translate.currentLang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';
    // this.shops = this.arrangeShopsByDistance(this.shops);
    // this.nearest_shop = this.shops.shift();
  }

  arrangeShopsByDistance(shops) {
    shops.sort(this.compare);
    return shops;
  }

  compare(a,b) {
    if (a.distance.distance.value < b.distance.distance.value)
      return -1;
    if (a.distance.distance.value > b.distance.distance.value)
      return 1;
    return 0;
  }

  getShops() {
    this.shopService.getShops().subscribe(
        data => {
          var shops = data;
          this.locationService.getDistanceToShop(this.current_location, shops).subscribe(
            data => {
              var distances = data.rows[0].elements;
              Array.prototype.forEach.call(shops, shop => {
                this.shops_info.push({'shop' : shop, 'distance' : distances[shops.indexOf(shop)]});
              });  
              this.shops = this.shops_info;
              this.shops = this.arrangeShopsByDistance(this.shops);
              this.nearest_shop = this.shops.shift();
            },
            err => {
                console.log(err);
            }
          );
        },
        err => {
            console.log(err);
        }
    );
  }

  ionViewDidLoad() {
    this.locationService.getCurrentLocation().then(data => {
      this.current_location = data.coords;
      this.getShops();
    })
  }

}
