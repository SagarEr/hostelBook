import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


/**
 * Generated class for the PopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pop-over',
  templateUrl:'pop-over.html' 
})
export class PopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }
  // close() {
  //   this.viewCtrl.dismiss();
  // }
}
