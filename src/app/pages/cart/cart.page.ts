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
    this.modalController.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {}

  cartCost() {
    let sum = 0;
    this.cart$.value.forEach(item => {
      sum += item.price;
    });
    return sum;
  }

  //INSERT FIREBASE CODE HERE
  checkout() {
    alert('Checked Out!');
  }
}
