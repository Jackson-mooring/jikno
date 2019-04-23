import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/main/account.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { DangerComponent } from './components/danger/danger.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { NewPasswordModule } from '../forgot-password/new-password.module';

@NgModule({
	declarations: [
		AccountComponent,
		DangerComponent,
		UserComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		SharedModule,
		FormsModule,
		NewPasswordModule,
	]
})
export class AccountModule { }
