import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { EnterEmailComponent } from './enter-email/enter-email.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { MainComponent } from './main/main.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ContinueComponent } from './continue/continue.component';

@NgModule({
	declarations: [
		EnterEmailComponent,
		EnterCodeComponent,
		MainComponent,
		NewPasswordComponent,
		ContinueComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule
	]
})
export class ForgotPasswordModule { }
