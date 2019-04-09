import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar-component/sidebar.component'

import { HabitsSidebarComponent } from '../../../apps/habits/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [
		HabitsSidebarComponent,
		SidebarComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
	],
	exports: [
		SidebarComponent,
	]
})
export class CustomSidebarModule { }
