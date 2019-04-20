import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		AccountComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
	]
})
export class AccountModule { }
