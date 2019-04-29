import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AppRoutes } from '../routing/app-routes';
import { NoLogin } from '../routing/no-login';
import { UserService } from '../services/user/user.service';
import { DataService } from '../services/data/data.service';
import { SyncService } from '../services/sync/sync.service';
import { AlertService } from '../alert/service/alert.service';

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
		private dataService: DataService,
		private alertService: AlertService,
		public syncService: SyncService,
	) { }

	ngOnInit() {
		if (localStorage.getItem('redirect') !== null) this.router.navigateByUrl(localStorage.getItem('redirect'));
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

		let routeIt = false;
		if (!this.userService.isUser()) {
			routeIt = true;
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

	retryAll() {
		const retry = document.getElementsByClassName("retry") as HTMLCollectionOf<HTMLElement>;
		for (let x in retry) {
			if (retry[x].click) retry[x].click();
		}
	}

	log(val) {
		console.log(val);
	}

}
