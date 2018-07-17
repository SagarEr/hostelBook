import { LoginPage } from './../login/login';
import { DetailPage } from './../detail/detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore , AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {
  arr=[];
  items: Observable<any[]>;
  deposits: Observable<any>;
    private itemsCollection: AngularFirestoreCollection<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFirestore) {
    this.itemsCollection = db.collection<any>('hostels',ref=>ref.where('booking', '==', true));
    this.deposits = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id; 
            return {  id, ...data };
  
      }))
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
  }
  details(item)
  {
    this.navCtrl.push(DetailPage,{item:item});
  }
  changeWishlist(a){
   
    event.stopPropagation();
    var collect=this.db.collection('hostels');
    collect.doc(a.id).update({
      status:!a.status
    });
  }
  goToLogin()
  {
    this.navCtrl.push(LoginPage);
  }
}
