import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	constructor(private toastController: ToastController) {}

	cart$ = new BehaviorSubject([]);

	initializeCart() {
		this.cart$.next([]);
	}

	getCart() {
		this.cart$.subscribe(result => console.log('CART:', result));
	}

	//Adds menu item to the cart with an id and displays a toast of the item added
	async addCart(menuItem) {
		let menuItemCopy = JSON.parse(JSON.stringify(menuItem));
		let cartCopy = [...this.cart$.value, menuItemCopy];
		cartCopy.forEach((item, index) => {
			item.id = index;
		});
		this.cart$.next(cartCopy);
		let toast = await this.toastController.create({
			message: `Item added to cart: ${menuItem.name}`,
			duration: 1000,
			position: 'top',
			showCloseButton: true
		});
		toast.present();
	}

	removeCart(id) {
		let newCart = [...this.cart$.value];
		newCart = newCart.filter((value, index) => {
			return index != id;
		});
		newCart.forEach((item, index) => {
			item.id = index;
		});
		this.cart$.next(newCart);
	}
}
