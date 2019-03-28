import { NgModule } from '@angular/core';
import { CoreModule } from '../../shared/core.module';
import { AppRoutingModule } from '../../routing/app-routing.module';

import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CoreModule,
		AppRoutingModule,
	]
})
export class HomeModule { }
