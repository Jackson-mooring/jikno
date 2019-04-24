import { Injectable } from '@angular/core';
import { Noti } from '../../model/noti'

@Injectable({
	providedIn: 'root'
})
export class NotiService {

	constructor() { }
	public notifications: Noti[] = [
		{
			title: 'Deg',
			description: 'fhjhfg',
			unread: true,
			app: 'butter',
			warning: false,
			link: 'fjdsfjs',
			date: 1555975897884,
		}
	]
}
