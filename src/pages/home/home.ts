import { DataProvider } from './../../providers/data/data';
import { HotelPage } from './../hotel/hotel';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
items:string[];
finalItems:string[];
selectedPlace="";
person=1;
fromDate;
toDate;
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  constructor(public navCtrl: NavController,private cService:DataProvider) {
    this.initializeItems();
  }
  addPlace(i)
  {
    this.selectedPlace=this.finalItems[i];
    this.finalItems=[];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.finalItems = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
   
  }
  // set()
  // {
  //   this.cService.person=this.selectedPlace;
  //   console.log(this.selectedPlace);
  //   console.log(this.cService.person);
  // }
  // openDatepicker()
  // {
  //   this.datePicker.show({
  //     date: new Date(),
  //     mode: 'date',
  //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  //   }).then(
  //     date => console.log('Got date: ', date),
  //     err => console.log('Error occurred while getting date: ', err)
  //   );
  // }

  goToHotels()
  {
    this.cService.place=this.selectedPlace;
    this.cService.person=this.person;
    this.cService.toDate=this.toDate;
   // console.log(this.fromDate.toLocaleDateString);
    console.log(this.fromDate);
    this.cService.fromDate=this.fromDate;
    this.navCtrl.push(HotelPage);
  }

}
