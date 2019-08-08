import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CartFabComponent } from './cart-fab/cart-fab.component';

@NgModule({
  //entryComponents: [CartFabComponent],
  declarations: [CartFabComponent],
  imports: [IonicModule, CommonModule],
  exports: [CartFabComponent]
})
export class SharedComponentsModule {}
