import { HomePage } from './../home/home';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore , AngularFirestoreCollection } from 'angularfire2/firestore';
/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
item:any={};
num:Number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private cService : DataProvider,public db:AngularFirestore) {
   this.num= this.cService.roomNumber
    this.item=this.navParams.get('item');
    console.log(this.item);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }
bookRoom()
{
  var collect=this.db.collection('hostels');
  collect.doc(this.item.id).update({
    booking:true
  });
  console.log(this.item.id);
  this.navCtrl.push(HomePage);
}
}
