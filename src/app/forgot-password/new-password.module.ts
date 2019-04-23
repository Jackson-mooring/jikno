import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewPasswordComponent } from './new-password/new-password.component';


@NgModule({
	declarations: [
		NewPasswordComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		RouterModule,
	],
	exports: [
		NewPasswordComponent,
	]
})
export class NewPasswordModule { }