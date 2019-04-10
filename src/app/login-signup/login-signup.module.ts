// tslint:disable: indent
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../shared/core.module';
import { AppRoutingModule } from '../routing/app-routing.module';

import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({

	declarations: [
		MainComponent,
		LoginComponent,
		SignUpComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		CoreModule,
		AppRoutingModule
	]
})
export class LoginSignupModule { }
