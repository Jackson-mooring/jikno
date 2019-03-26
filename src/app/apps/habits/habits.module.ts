import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../../shared/core.module';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		CoreModule,
	]
})
export class HabitsModule { }
