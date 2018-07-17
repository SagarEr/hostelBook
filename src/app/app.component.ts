import { HomePage } from './../pages/home/home';
import { AuthService } from './../services/auth.services';
import { Component,ViewChild } from '@angular/core';
import { Platform, NavController,Nav,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {Injectable} from '@angular/core';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild('myNav') nav: NavController
  //private navCtrl: NavController;
  constructor(platform: Platform,private app: App, statusBar: StatusBar, splashScreen: SplashScreen,private af:AuthService,private auth:AngularFireAuth) {
    //this.navCtrl = app.getActiveNav();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase
  .auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      var token = result.credential.accessToken;
      var user = result.user;
     // console.log(token);
    //  console.log("tata");
      this.nav.setRoot(HomePage);
    }
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  }
  
}
