import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	sidebarIsIn = false;
	blur = false;
	emailForForgotPassword: string;
	resetPassword = false;
	showAppsOverlay = false;
	appBeingDraggedCurrentlyInAppsOverlay: string;
	secondaryRoute = false;
	routes = [];
	isInternet = false;

	constructor(
		private router: Router,
		private routeLocation: Location,
		) {
		this.router.events.forEach((event) => {
			if (event instanceof NavigationStart) {
				this.secondaryRoute = false;
				this.routes.push(this.routeLocation.path());
			}
		});
	}
}
