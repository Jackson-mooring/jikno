import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { AccountService } from '../../../service/account/account.service';
import { ChangeValuesService } from '../../../service/change-values/change-values.service';
import { CheckTypingService } from 'src/app/service/check-typing/check-typing.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

	constructor(
		public user: UserService,
		public accountService: AccountService,
		private changeValuesService: ChangeValuesService,
		private checkTyping: CheckTypingService,
	) { }

	username: string = '';
	email: string = this.user.getUser().email;

	ngOnInit() {
	}
	
	changeValues() {
		this.changeValuesService.changeValues(this.email, this.user.getUser().password, this.user.getUser().email)
			.subscribe(res => {
				if (res == "CHANGED") this.user.setUser(this.email, this.user.getUser().password);
			})
	}

	keyUp(what: string) {
		if (what == 'username') this.checkTyping.check(() => {this.accountService.subData()}, 200);
		else if (what == 'email') this.checkTyping.check(() => {this.changeValues()}, 200)
	}

}