import { Injectable } from '@angular/core';

import { UserVals } from '../../models/user-vals';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor() { }

	public getUser(): UserVals {
		const email = localStorage.getItem('email');
		const password = localStorage.getItem('password');
		return {
			email,
			password,
		}
	}

	public setUser(email: string, password: string) {
		localStorage.setItem('email', email);
		localStorage.setItem('password', password);
	}

	public cleanUser(complete?: boolean) {
		if (complete === true) localStorage.clear();
		else {
			localStorage.removeItem('email');
			localStorage.removeItem('password');
		}
	}

	public isUser(): boolean {
		const item1 = localStorage.getItem('email');
		const item2 = localStorage.getItem('password');
		if (item1 == null || item2 == null) return false
		else return true;
	}
}
