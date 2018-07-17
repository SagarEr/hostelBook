import { NumberroomPage } from './../numberroom/numberroom';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopOverPage } from '../pop-over/pop-over';



/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
 
  propertyMode=true;
  policyMode=true;
  cancelMode=true;
  thingMode=true;
  item={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.item=this.navParams.get("item");
    console.log(this.item);
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopOverPage);
    let ev = myEvent;
    popover.present({
      ev
    });
  }
toggleProperty()
{
  this.propertyMode=!this.propertyMode;
}
togglePolicy()
{
  this.policyMode=!this.policyMode;
}
toggleCancel()
{
  this.cancelMode=!this.cancelMode;
}
toggleThing()
{
  this.thingMode=!this.thingMode;
}

numberRoom()
{
  this.navCtrl.push(NumberroomPage,{item:this.item});
}
}
