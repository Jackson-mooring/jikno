import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { AccountService } from '../../../service/account/account.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

	username: string = '';

	constructor(
		public user: UserService,
		public accountService: AccountService,
	) { }

	ngOnInit() {
		console.log(this.accountService.userInfo)
		if (this.accountService.userInfo.username !== undefined) this.username = this.accountService.userInfo.username;
	}

}
