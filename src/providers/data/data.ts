// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
person;
place;
toDate;
roomNumber;
fromDate;
userss;
hostel=[{image:"../../assets/imgs/hostel2.jpg",name:"São Paulo",status:true,rating:9.2,review:"SUPERB",comment:168,price:199,address:"D-100, B2 Bihari Marg, BaniPark, Jaipur, India"},
{image:"../../assets/imgs/hostel.jpg",name:"Krishna Hostels",status:false,rating:8.9,review:"GOOD",comment:142,price:149,address:"D-100, B2 Bihari Marg, BaniPark, Jaipur, India"},
{image:"../../assets/imgs/hostel1.jpg",name:"OYO Rooms",status:true,rating:9.5,review:"PERFECT",comment:176,price:249,address:"D-100, B2 Bihari Marg, BaniPark, Jaipur, India"}];
  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
