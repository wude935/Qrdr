import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartPage } from '../../../pages/cart/cart.page';
import { CartService } from '../../../services/cart.service';

@Component({
	selector: 'app-cart-fab',
	templateUrl: './cart-fab.component.html',
	styleUrls: ['./cart-fab.component.scss']
})
export class CartFabComponent {
	constructor(
		private cart: CartService,
		private modalController: ModalController
	) {}

	public cart$ = this.cart.cart$;

	getBadgeNumber() {
		if (this.cart$.value.length < 100) {
			return this.cart$.value.length;
		} else {
			return '∗';
		}
	}

	async showCart() {
		const modal = await this.modalController.create({
			component: CartPage
		});
		return await modal.present();
	}
}
