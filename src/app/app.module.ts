import { AuthService } from './../services/auth.services';
import { BooksPage } from './../pages/books/books';
import { BookingPage } from './../pages/booking/booking';
import { NumberroomPage } from './../pages/numberroom/numberroom';
import { WishlistHotelsPage } from './../pages/wishlist-hotels/wishlist-hotels';
import { LoginPage } from './../pages/login/login';
import { PopOverPage } from './../pages/pop-over/pop-over';
import { DetailPage } from './../pages/detail/detail';
import { DataProvider } from './../providers/data/data';
import { HotelPage } from './../pages/hotel/hotel';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler, Nav } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFirestoreModule,AngularFirestore} from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatePicker } from '@ionic-native/date-picker';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import {HttpClientModule} from '@angular/common/http';

var config = {
  apiKey: "AIzaSyCn7TdJW5pTRXZYWSc5bWnvI1EWAcTOzGg",
  authDomain: "hostel-6f15d.firebaseapp.com",
  databaseURL: "https://hostel-6f15d.firebaseio.com",
  projectId: "hostel-6f15d",
  storageBucket: "hostel-6f15d.appspot.com",
  messagingSenderId: "704608170748"
};

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    HotelPage,
    DetailPage,
    PopOverPage,
    LoginPage,
    WishlistHotelsPage,
    NumberroomPage,
    BookingPage,
    BooksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    HotelPage,
    DetailPage,
    PopOverPage,
    LoginPage,
    WishlistHotelsPage,
    NumberroomPage,
    BookingPage,
    BooksPage
  ],
  providers: [
    AngularFirestore,
    DataProvider,
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService,
  
  ]
})
export class AppModule {
  
}
