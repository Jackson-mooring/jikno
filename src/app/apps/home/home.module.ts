import { NgModule } from '@angular/core';
import { CoreModule } from '../../shared/core.module';
import { AppRoutingModule } from '../../routing/app-routing.module';

import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CoreModule,
		AppRoutingModule,
		SharedModule,
	]
})
export class HomeModule { }
