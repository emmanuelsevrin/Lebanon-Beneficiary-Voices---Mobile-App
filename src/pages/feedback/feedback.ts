import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the FeedbackPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
	
	direction: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService) {
  	this.translate.currentLang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
