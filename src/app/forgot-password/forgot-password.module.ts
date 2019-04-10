import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterEmailComponent } from './enter-email/enter-email.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { MainComponent } from './main/main.component';
import { NewPasswordComponent } from './new-password/new-password.component';

@NgModule({
	declarations: [
		EnterEmailComponent, EnterCodeComponent, MainComponent, NewPasswordComponent
	],
	imports: [
		CommonModule
	]
})
export class ForgotPasswordModule { }
