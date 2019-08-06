import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: any;

  constructor(private addCartToast: ToastController) {}

  ngOnInit() {}

  async addCart(menuItem) {
    let toast = await this.addCartToast.create({
      message: `Item added to cart: ${menuItem.name}`
    });
    toast.present();
  }
}
