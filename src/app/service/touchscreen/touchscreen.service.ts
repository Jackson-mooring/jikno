import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TouchscreenService {

	constructor() { }

	isTouchscreen() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	}
}
