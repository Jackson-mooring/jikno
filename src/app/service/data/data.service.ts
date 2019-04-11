import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	sidebarIsIn = false;
	blur = false;
	showAppsOverlay = false;
	appBeingDraggedCurrentlyInAppsOverlay: string;

	constructor() { }
}
