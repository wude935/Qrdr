import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit {
  constructor(
    private cart: CartService,
    private modalController: ModalController
  ) {}

  private cart$ = this.cart.cart$;

  closeCart() {
    console.log('RUN');
    this.modalController.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {
    console.log('CART INIT');
  }
}
