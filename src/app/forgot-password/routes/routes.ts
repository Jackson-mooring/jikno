import { Routes } from '@angular/router';

import { EnterEmailComponent } from '../enter-email/enter-email.component';
import { EnterCodeComponent } from '../enter-code/enter-code.component';
import { NewPasswordComponent } from '../new-password/new-password.component';

export const ForgotPasswordRoutes: Routes = [
	{ path: '/forgot-password', redirectTo: '/forgot-password/enter-email', pathMatch: 'full' },
	{ path: '/forgot-password/enter-email', component: EnterEmailComponent },
	{ path: '/forgot-password/enter-code', component: EnterCodeComponent },
	{ path: '/forgot-password/new-password', component: NewPasswordComponent },
]