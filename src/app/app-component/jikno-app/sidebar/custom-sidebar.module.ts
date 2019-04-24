import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar-component/sidebar.component'

import { HabitsSidebarComponent } from '../../../apps/habits/sidebar/sidebar.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { TasksSidebarComponent } from '../../../apps/tasks/sidebar/sidebar.component';

@NgModule({
	declarations: [
		HabitsSidebarComponent,
		SidebarComponent,
		TasksSidebarComponent
	],
	
	imports: [
		CommonModule,
		SharedModule,
		RouterModule,
	],
	exports: [
		SidebarComponent,
	]
})
export class CustomSidebarModule { }
