import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ItemServiceProvider } from '../../providers/item-service/item-service';

@Component({
  selector: 'page-price-list',
  templateUrl: 'price-list.html'
})
export class PriceListPage {

	direction: string;
	item_list: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService, private itemService: ItemServiceProvider) {
  	this.translate.currentLang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';
  }


  ionViewDidLoad() {

    this.itemService.getNewItems().subscribe(
      data => {
        console.log(data);
        this.item_list.push(data);
        console.log(this.item_list);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log('complete');
      }
    );

    this.itemService.getTopItems().subscribe(
        data => {
          this.item_list = data;
          console.log(this.item_list);
        },
        err => {
            console.log(err);
        }
    );
    console.log('ionViewDidLoad PriceListPage');
  }

}
