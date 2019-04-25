import { Injectable } from '@angular/core';
import { Noti } from '../../model/noti';
import { AccountService } from '../account/account.service';
import { transition } from '@angular/animations';


@Injectable({
	providedIn: 'root'
})
export class NotiService {

	constructor(
		public accountService: AccountService
	) { }
	public notifications: Noti[] = [
	]

	public getNoti() {
		if (!this.accountService.getNotifications().correct) {
			setTimeout(() => this.getNoti(), 200)
		} else this.notifications.concat(this.accountService.getNotifications().message)
	}
}
