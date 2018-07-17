import { BookingPage } from './../booking/booking';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NumberroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-numberroom',
  templateUrl: 'numberroom.html',
})
export class NumberroomPage {
items=[
'1 Bed',
'2 Beds',
'3 Beds',
'4 Beds',
'5 Beds',
'6 Beds',
'7 Beds',
'8 Beds',
];
a={};
  constructor(public navCtrl: NavController, public navParams: NavParams , private cService:DataProvider) {
    this.a=this.navParams.get("item");
    console.log(this.a);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NumberroomPage');
  }

  itemSelected(i)
  {
    this.cService.roomNumber=i+1;
    console.log(i+1);
    this.navCtrl.push(BookingPage,{item:this.a});
  }

}
