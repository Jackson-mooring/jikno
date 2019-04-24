import { HomeRoutes } from '../apps/home/routes/routes';

import { LoginRoutes } from '../login-signup/routes/routes';
import { HabitsRoutes } from '../apps/habits/routes/routes';
import { ForgotPasswordRoutes } from '../forgot-password/routes/routes';
import { NotiRoutes } from '../notifications/routes/routes'
import { AccountRoutes } from '../account/routes/routes';
import { TasksRoutes } from '../apps/tasks/routes/routes'

export const RoutesFromApps = [
    HomeRoutes,
    LoginRoutes,
	HabitsRoutes,
	ForgotPasswordRoutes,
	NotiRoutes,
	AccountRoutes,
	TasksRoutes,
];
