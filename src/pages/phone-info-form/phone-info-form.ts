import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { Sim } from '@ionic-native/sim';
import { Device } from '@ionic-native/device';

import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the PhoneInfoFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-phone-info-form',
  templateUrl: 'phone-info-form.html',
})
export class PhoneInfoFormPage {

	direction: string;
  phone_number: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private translate: TranslateService, private sim: Sim, private device: Device) {
  	
    translate.onLangChange.subscribe((event: LangChangeEvent) => { 
	  	event.lang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';

      this.sim.getSimInfo().then(
        (info) => {
          if(info.phoneNumber)
            this.phone_number = this.formatPhoneNumber(info.phoneNumber);
          else
            this.phone_number = '';
        },
        (err) => console.log('Unable to get sim info: ', err)
      );
		});

  }

  phoneInfoLanguage() {
  	this.translate.onLangChange.subscribe((event: LangChangeEvent) => { 
	  	console.log(event.lang);
		});
  }

  startApp() {
    this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneInfoFormPage');
  }

  formatPhoneNumber(phone_number) {
    if(this.direction === 'rtl') {
      return phone_number.slice(1) + '+';
    }
    return phone_number;
  }


}
