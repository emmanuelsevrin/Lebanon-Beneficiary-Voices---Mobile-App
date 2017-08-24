import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Device } from '@ionic-native/device';
import { Sim } from '@ionic-native/sim';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { GpsUsePage } from '../pages/gps-use/gps-use';
import { PhoneInfoFormPage } from '../pages/phone-info-form/phone-info-form';
import { PriceListPage } from '../pages/price-list/price-list';
import { ShopListPage } from '../pages/shop-list/shop-list';
import { FeedbackPage } from '../pages/feedback/feedback';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemComponent } from '../components/item/item';
import { ShopComponent } from '../components/shop/shop';
import { ItemServiceProvider } from '../providers/item-service/item-service';
import { ShopServiceProvider } from '../providers/shop-service/shop-service';
import { LocationServiceProvider } from '../providers/location-service/location-service';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    GpsUsePage,
    PhoneInfoFormPage,
    PriceListPage,
    ShopListPage,
    FeedbackPage,
    TabsPage,
    ItemComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { 
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false 
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    GpsUsePage,
    PhoneInfoFormPage,
    PriceListPage,
    ShopListPage,
    FeedbackPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Device,
    Sim,
    NativePageTransitions,
    Keyboard,
    Geolocation,
    ItemServiceProvider,
    ShopServiceProvider,
    LocationServiceProvider
  ]
})

export class AppModule {}