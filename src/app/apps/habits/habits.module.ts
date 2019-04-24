import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../shared/core.module';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReorderComponent } from './reorder/reorder.component';
import { NewHabitComponent } from './new-habit/new-task.component';

@NgModule({
	declarations: [
		HomeComponent,
		DashboardComponent,
		ReorderComponent,
		NewHabitComponent,
	],
	imports: [
		CommonModule,
		CoreModule,
		RouterModule,
	]
})
export class HabitsModule { }
