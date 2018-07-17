import { BooksPage } from './../books/books';
import { WishlistHotelsPage } from './../wishlist-hotels/wishlist-hotels';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';





@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = ContactPage;
  tab4Root = WishlistHotelsPage;
  tab5Root = BooksPage;

  constructor() {

  }
}
