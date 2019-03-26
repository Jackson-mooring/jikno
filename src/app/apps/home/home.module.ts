import { NgModule } from '@angular/core';
import { CoreModule } from '../../shared/core.module';

import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CoreModule,
	]
})
export class HomeModule { }
