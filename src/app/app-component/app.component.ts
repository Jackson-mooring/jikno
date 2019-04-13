import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AppRoutes } from '../routing/app-routes';
import { NoLogin } from '../routing/no-login';
import { UserService } from '../service/user/user.service';
import { DataService } from '../service/data/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router,
		private routeLocation: Location,
		private userService: UserService,
		private dataService: DataService
	) { }

	ngOnInit() {
	}

	isApp(): boolean {
		var isApp = false;

		for (var i in AppRoutes) {
			const route = AppRoutes[i];
			const path = this.routeLocation.path().slice(0, route.length);
			if (route === path) {
				isApp = true;
			}
		}

		let routeIt = true;


		if (!this.userService.isUser()) {
			NoLogin.map(route => {
				if (route === this.routeLocation.path().slice(0, route.length)) {
					routeIt = false;
				};
			})
		}
		if (routeIt) this.router.navigateByUrl('/login');

		console.log('App updated');
		return isApp;
	}

}
