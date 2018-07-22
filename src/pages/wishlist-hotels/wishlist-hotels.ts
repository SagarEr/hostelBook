import { LoginPage } from './../login/login';
import { map } from 'rxjs/operators';
import { DetailPage } from './../detail/detail';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore , AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


/**
 * Generated class for the WishlistHotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wishlist-hotels',
  templateUrl: 'wishlist-hotels.html',
})
export class WishlistHotelsPage {
arr=[];
items: Observable<any[]>;
// deposits: Observable<any>;
ho=[];
arrID=[];
  private itemsCollection: AngularFirestoreCollection<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFirestore,public cService:DataProvider) {
    // this.arr=this.cService.hostel;
    // this.itemsCollection = db.collection<any>('hostels',ref=>ref.where('status', '==', true));
    // this.deposits = this.itemsCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as any;
    //     const id = a.payload.doc.id; 
    //         return {  id, ...data };
  
    //   }))
    // );
    console.log("hh");

    db.collection('wishlist',ref=>ref.where('userid','==',this.cService.userss.email)).valueChanges().subscribe
    (data=>{
      this.ho=data,
      console.log(this.ho),
      console.log(data),
      this.getHid()
    })
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistHotelsPage');
  }
  details(item)
  {
    this.navCtrl.push(DetailPage,{item:item});
  }
  changeWishlist(a){
   
    event.stopPropagation();
    // var collect=this.db.collection('hostels');
    // collect.doc(a.id).update({
    //   status:!a.status
    // });
  }
  goToLogin()
  {
    this.navCtrl.push(LoginPage);
  }
  getHid()
  {
    for(let i=0;i<this.ho.length;i++)
    {
      this.arrID.push(this.ho[i].hid);
      var docRef = this.db.collection("hostels").doc(this.ho[i].hid);
      docRef.valueChanges().subscribe(d=>{
console.log(d);
this.arr.push(d);
      });
      
      // console.log(docRef.data());

    }
    console.log(this.arrID);

  }
}
