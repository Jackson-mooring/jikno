import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar-component/sidebar.component'

import { HabitsSidebarComponent } from '../../../apps/habits/sidebar/sidebar.component';

@NgModule({
	declarations: [
		HabitsSidebarComponent,
		SidebarComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		SidebarComponent,
	]
})
export class CustomSidebarModule { }
