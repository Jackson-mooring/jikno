import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesFromApps } from './routes-from-apps';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
];

for (var i in RoutesFromApps) {
	for (var x in RoutesFromApps[i]) {
		routes.push(RoutesFromApps[i][x]);
	}
}

routes.push({ path: '**', component: NotFoundComponent });

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
