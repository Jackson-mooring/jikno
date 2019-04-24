import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewPasswordModule } from './new-password.module';

import { EnterEmailComponent } from './enter-email/enter-email.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { MainComponent } from './main/main.component';
import { ContinueComponent } from './continue/continue.component';


@NgModule({
	declarations: [
		EnterEmailComponent,
		EnterCodeComponent,
		MainComponent,
		ContinueComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		RouterModule,
		NewPasswordModule,
	]
})
export class ForgotPasswordModule { }
