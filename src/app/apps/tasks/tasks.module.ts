import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TasksHomeComponent } from './home/home.component';
import { TasksSingleComponent } from './tasks-single/tasks-single.component'


@NgModule({
	declarations: [
		TasksHomeComponent,
		TasksSingleComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class TasksModule { }
