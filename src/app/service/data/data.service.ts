import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	sidebarIsIn = false;
	blur = false;
	didFindRoute = true;
	showAppsOverlay = false;

	constructor() { }
}
