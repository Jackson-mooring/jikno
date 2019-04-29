import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CheckTypingService {

	constructor() { }

	timeout;
	check(then: Function, time: number) {
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			then();
		}, time);
	}

}
