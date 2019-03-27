// tslint:disable: indent
import { Routes } from '@angular/router';

import { MainComponent } from '../main/main.component';

export const LoginRoutes: Routes  = [
	{ path: 'login', component: MainComponent },
	{ path: 'sign-up', component: MainComponent }
];
