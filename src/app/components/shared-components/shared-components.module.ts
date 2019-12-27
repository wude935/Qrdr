import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HideFabDirective } from '../../directives/hide-fab.directive';
import { CartFabComponent } from './cart-fab/cart-fab.component';

@NgModule({
	// entryComponents: [CartFabComponent],
	declarations: [HideFabDirective, CartFabComponent],
	imports: [IonicModule, CommonModule],
	exports: [HideFabDirective, CartFabComponent]
})
export class SharedComponentsModule {}
