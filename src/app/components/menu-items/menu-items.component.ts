import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  @Input() menuItems: any;

  constructor(private cart: CartService) {}

  ngOnInit() {}
}
