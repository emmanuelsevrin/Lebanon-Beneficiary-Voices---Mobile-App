import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { PriceListPage } from '../price-list/price-list';
import { ShopListPage } from '../shop-list/shop-list';
import { FeedbackPage } from '../feedback/feedback';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	priceListRoot =  PriceListPage;
	shopListRoot =  ShopListPage;
	feedbackRoot =  FeedbackPage;
  loaded:   boolean = false;
  tabIndex: number  = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
  }

  private getAnimationDirection(index):string {
    var currentIndex = this.tabIndex;
    this.tabIndex = index;
    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return ('right');
    }
  }

  public transition(e):void {    
    let options: NativeTransitionOptions = {
      direction: this.getAnimationDirection(e.index),
      duration: 250,
      slowdownfactor: -1,
      slidePixels: 0,
      iosdelay: 20,
      androiddelay: 0,
    };

    if (!this.loaded) {
      this.loaded = true;
      return;
    }

    this.nativePageTransitions.slide(options);
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
