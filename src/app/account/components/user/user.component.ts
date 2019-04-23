import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { AccountService } from '../../../service/account/account.service';
import { ChangeValuesService } from '../../../service/change-values/change-values.service';
import { CheckTypingService } from 'src/app/service/check-typing/check-typing.service';
import { ValidateValuesService } from 'src/app/service/validate-values/validate-values.service';
import { CheckEmailService } from 'src/app/service/validate-email/check-email.service';

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
		private validateValuesService: ValidateValuesService,
		private checkEmailService: CheckEmailService,
	) { }

	username: string = '';
	email: string = this.user.getUser().email;
	emailIsValid: boolean = true;
	emailInUse: boolean = false;

	ngOnInit() {
	}

	changeValues() {
		this.emailIsValid = true;
		if (this.email !== '' && this.validateValuesService.validateEmail(this.email).correct) {
			this.checkEmailService.validate(this.email)
				.subscribe(res => {
					this.emailInUse = false;
					if (!res) {
						this.changeValuesService.changeValues(this.email, this.user.getUser().password, this.user.getUser().email)
							.subscribe(res => {
								if (res == "CHANGED") this.user.setUser(this.email, this.user.getUser().password);
							})
					} else if (this.user.getUser().email !== this.email) {
						this.emailInUse = true;
					}
				})
		} else {
			this.emailIsValid = false;
		}
	}

	keyUp(what: string) {
		if (what == 'username') this.checkTyping.check(() => { this.accountService.subData() }, 2000);
		else if (what == 'email') this.checkTyping.check(() => { this.changeValues() }, 1000);
	}

}