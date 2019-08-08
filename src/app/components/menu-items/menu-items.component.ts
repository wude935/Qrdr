import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  @Input() menuItems: any;

  constructor(private addCartToast: ToastController) {}

  ngOnInit() {}

  async addCart(menuItem) {
    let toast = await this.addCartToast.create({
      message: `Item added to cart: ${menuItem.name}`
    });
    toast.present();
  }
}
