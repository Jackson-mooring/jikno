import { Routes } from '@angular/router';

import { MainComponent } from '../main/main.component';

export const ForgotPasswordRoutes: Routes = [
	{ path: 'forgot-password', redirectTo: 'forgot-password/enter-email', pathMatch: 'full' },
	{ path: 'forgot-password/enter-email', component: MainComponent },
	{ path: 'forgot-password/enter-code', component: MainComponent },
	{ path: 'new-password', component: MainComponent },
	{ path: 'forgot-password/continue', component: MainComponent },
]