import { PopOverPage } from './../pages/pop-over/pop-over';
import { DetailPage } from './../pages/detail/detail';
import { DataProvider } from './../providers/data/data';
import { WishlistPage } from './../pages/wishlist/wishlist';
import { HotelPage } from './../pages/hotel/hotel';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatePicker } from '@ionic-native/date-picker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WishlistPage,
    ContactPage,
    HomePage,
    TabsPage,
    HotelPage,
    DetailPage,
    PopOverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WishlistPage,
    ContactPage,
    HomePage,
    TabsPage,
    HotelPage,
    DetailPage,
    PopOverPage
  ],
  providers: [
    DataProvider,
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
