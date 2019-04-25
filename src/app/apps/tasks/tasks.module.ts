import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksHomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
	declarations: [
		TasksHomeComponent
	],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class TasksModule { }
