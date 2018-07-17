import { map } from 'rxjs/operators';
import { DataProvider } from './../../providers/data/data';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../../services/auth.services';
import { HomePage } from './../home/home';
import { WishlistHotelsPage } from './../wishlist-hotels/wishlist-hotels';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFirestore , AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public userProfile:any = null;
  check=[];
  private itemsCollection: AngularFirestoreCollection<any>;
  
  constructor(private cService:DataProvider,public navCtrl: NavController, public navParams: NavParams,private af:AuthService,public db:AngularFirestore) {

    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        console.log(user);
        console.log("hii");
        this.userProfile = user;
        this.cService.userss=user;
       db.collection('users',ref=>ref.where('email','==',this.userProfile.email)).valueChanges().subscribe(data=>{
 this.check = data,
console.log(this.check),
this.save()

       });
      } else {
        console.log("There's no user here");
      }
    });

  }

  save()
  {
    if(this.check.length==0)
    {
      console.log("hello null");
      this.db.collection('users').add({
        name:this.userProfile.displayName,
        email:this.userProfile.email,
        uid:this.userProfile.uid
      });
    }
    else{
      console.log("no null");
    }
  }
  googleLogin():void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then( () => {
      firebase.auth().getRedirectResult().then( result => {
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user);
        console.log("hello");
        this.navCtrl.setRoot(HomePage)
      }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message);
      });
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 ab(){
   this.navCtrl.push(HomePage);
 }
 
}
