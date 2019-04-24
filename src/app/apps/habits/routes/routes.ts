import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReorderComponent } from '../reorder/reorder.component';
import { NewHabitComponent } from '../new-habit/new-task.component';

export const HabitsRoutes: Routes = [
	{ path: 'habits', component: HomeComponent },
	{ path: 'habits/dashboard', component: DashboardComponent },
	{ path: 'habits/reorder', component: ReorderComponent },
	{ path: 'habits/new-habit', component: NewHabitComponent },
]