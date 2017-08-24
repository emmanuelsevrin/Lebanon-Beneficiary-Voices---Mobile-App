import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { TranslateService } from '@ngx-translate/core';

import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translate: TranslateService, private keyboard: Keyboard) {
    translate.setDefaultLang('en');
    translate.use('ar');  
    
    this.rootPage = IntroPage;
    
    platform.ready().then(() => {
      this.keyboard.disableScroll(false);
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

