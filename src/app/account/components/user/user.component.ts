import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { AccountService } from '../../../service/account/account.service';
import { ChangeValuesService } from '../../../service/change-values/change-values.service';
import { CheckTypingService } from '../../../service/check-typing/check-typing.service';
import { ValidateValuesService } from '../../../service/validate-values/validate-values.service';
import { CheckEmailService } from '../../../service/validate-email/check-email.service';
import { DataService } from '../../../service/data/data.service';
import { SyncService } from '../../../service/sync/sync.service';

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
		private dataService: DataService,
		private syncService: SyncService,
	) { }

	username: string = '';
	email: string = this.user.getUser().email;
	emailIsValid: boolean = true;
	emailInUse: boolean = false;

	status = 'none';

	newPasswordOncomplete = () => {
		this.status = 'none';
	}

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
		if (what == 'username') this.checkTyping.check(() => {
			this.accountService.setUserInfo()
			.subscribe(res => {
				if (res) this.syncService.sync(false);
			});
		}, 2000);
		else if (what == 'email') this.checkTyping.check(() => { this.changeValues() }, 1000);
	}

	goToNew(pass: string) {
		if (pass == this.user.getUser().password) {
			this.status = 'new-password';
			this.dataService.resetPassword = true;
			this.dataService.emailForForgotPassword = this.user.getUser().email;
		}
	}

}