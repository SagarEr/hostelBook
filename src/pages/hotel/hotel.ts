import { DetailPage } from './../detail/detail';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFirestore , AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  arr=[];
  //items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;
  deposits: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams , private cService:DataProvider,public db:AngularFirestore) {
  this.place=this.cService.place;
  this.person=this.cService.person;
  this.toDate=this.cService.toDate;
  this.fromDate=this.cService.fromDate;
 // this.arr=this.cService.hostel;
  this.itemsCollection = db.collection<any>('hostels',ref=>ref.where('location', '==', this.place));
  this.deposits = this.itemsCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id; 
          return {  id, ...data };

    }))
  );
  console.log("hi");
  console.log(this.deposits);
 console.log(this.cService.userss);

  
  console.log("hi");
  // console.log(this.items);
  this.db.collection('wishlist',ref=>ref.where('userid', '==', this.cService.userss.displayName)).ref.get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelPage');

  }

  details(item)
  {
    // event.stopPropagation();
    console.log(item);
    this.navCtrl.push(DetailPage,{item:item});
    
  }
  changeWishlist(a){
   this.db.collection('wishlist').add({
     userid:this.cService.userss.email,
     hid:a.id
   })
  event.stopPropagation();
  var collect=this.db.collection('hostels');
  collect.doc(a.id).update({
    status:!a.status
  });
}

}
