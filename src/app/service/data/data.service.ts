import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	sidebarIsIn = false;
	blur = false;
	showAppsOverlay = false;
	appBeingDraggedCurrentlyInAppsOverlay: string;
	secondaryRoute = false;
	pastTitle = "Home";

	constructor(router: Router) {
		router.events.forEach((event) => {
			if (event instanceof NavigationStart) {
				this.pastTitle = document.querySelector("title").innerHTML
				this.secondaryRoute = false;
			}
		});
	}
}
