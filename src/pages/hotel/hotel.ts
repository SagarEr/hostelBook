import { DetailPage } from './../detail/detail';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class HotelPage {
  place="";
  person;
  toDate;
  fromDate;
  constructor(public navCtrl: NavController, public navParams: NavParams , private cService:DataProvider) {
  this.place=this.cService.place;
  this.person=this.cService.person;
  this.toDate=this.cService.toDate;
  this.fromDate=this.cService.fromDate;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');
  }

  details()
  {
    this.navCtrl.push(DetailPage);
  }

}
