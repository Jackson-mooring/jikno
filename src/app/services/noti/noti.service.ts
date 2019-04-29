import { Injectable } from '@angular/core';
import { Noti } from '../../models/noti';
import { AccountService } from '../account/account.service';


@Injectable({
	providedIn: 'root'
})
export class NotiService {

	constructor(
		public accountService: AccountService
	) {
		this.getNoti()
	 }
	public notifications: Noti[] = [
	]

	public getNoti() {
		if (!this.accountService.getNotifications().correct) {
			setTimeout(() => this.getNoti(), 200)
		} else this.notifications.concat(this.accountService.getNotifications().message)
	}
}
