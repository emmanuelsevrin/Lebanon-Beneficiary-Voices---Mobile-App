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
import { Sim } from '@ionic-native/sim';
import { Device } from '@ionic-native/device';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the PhoneInfoFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PhoneInfoFormPage = (function () {
    function PhoneInfoFormPage(navCtrl, navParams, translate, sim, device) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.sim = sim;
        this.device = device;
        translate.onLangChange.subscribe(function (event) {
            event.lang === 'ar' ? _this.direction = 'rtl' : _this.direction = 'ltr';
            _this.sim.getSimInfo().then(function (info) {
                if (info.phoneNumber)
                    _this.phone_number = _this.formatPhoneNumber(info.phoneNumber);
                else
                    _this.phone_number = '';
            }, function (err) { return console.log('Unable to get sim info: ', err); });
        });
    }
    PhoneInfoFormPage.prototype.phoneInfoLanguage = function () {
        this.translate.onLangChange.subscribe(function (event) {
            console.log(event.lang);
        });
    };
    PhoneInfoFormPage.prototype.startApp = function () {
        this.navCtrl.setRoot(TabsPage);
    };
    PhoneInfoFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhoneInfoFormPage');
    };
    PhoneInfoFormPage.prototype.formatPhoneNumber = function (phone_number) {
        if (this.direction === 'rtl') {
            return phone_number.slice(1) + '+';
        }
        return phone_number;
    };
    return PhoneInfoFormPage;
}());
PhoneInfoFormPage = __decorate([
    Component({
        selector: 'page-phone-info-form',
        templateUrl: 'phone-info-form.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, TranslateService, Sim, Device])
], PhoneInfoFormPage);
export { PhoneInfoFormPage };
//# sourceMappingURL=phone-info-form.js.map