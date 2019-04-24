import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotiComponent } from './noti/noti.component';
import { RouterModule } from '@angular/router';
import { NotiSingleComponent } from './noti-single/noti-single.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		NotiComponent,
		NotiSingleComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule
	]
})
export class NotiModule { }
