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

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopOverPage);
    let ev = {
      target : {
        getBoundingClientRect : () => {
          return {
            top: '100'
          };
        }
      }
    };
    popover.present({
      ev
    });
  }

}
