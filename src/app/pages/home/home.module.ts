import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuItemsComponent } from '../../components/menu-items/menu-items.component';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';
import { SharedComponentsModule } from '../../components/shared-components/shared-components.module';
import { HomePage } from './home.page';

@NgModule({
	imports: [
		SharedComponentsModule,
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([
			{
				path: '',
				component: HomePage
			}
		])
	],
	declarations: [HomePage, MenuListComponent, MenuItemsComponent]
})
export class HomePageModule {}
