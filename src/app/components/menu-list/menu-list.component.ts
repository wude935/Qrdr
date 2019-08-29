import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//Expandable list that allows users to select a menu item from a menu.
//Users can tap the menu item to go to 'details' page or tap the add button to add the menu item to the cart.
//Menu is retrieved from /assets/test.json.

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menu: any[];

  //INSERT FIREBASE CODE HERE
  constructor(private http: HttpClient) {
    this.http.get('assets/test.json').subscribe(result => {
      this.menu = result['menu'];
    });
  }

  ngOnInit() {}

  toggleSection(index) {
    this.menu[index].open = !this.menu[index].open;
  }

  toggleMenuItem(index, childIndex) {
    this.menu[index].children[childIndex].open = !this.menu[index].children[
      childIndex
    ].open;
  }
}
