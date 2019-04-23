import { Component, OnInit } from '@angular/core';
import { ChangeValuesService } from '../../../service/change-values/change-values.service';
import { UserService } from '../../../service/user/user.service';
import { AlertService } from '../../../alert/service/alert.service';
import { SignUpService } from '../../../service/sign-up/sign-up.service';
import { SyncService } from '../../../service/sync/sync.service';

@Component({
	selector: 'app-danger',
	templateUrl: './danger.component.html',
	styleUrls: ['./danger.component.sass']
})
export class DangerComponent implements OnInit {

	selectedOption = 'none';
	showDanger = false;
	loading = false;

	constructor(
		private changeValuesService: ChangeValuesService,
		private user: UserService,
		private alert: AlertService,
		private signUpService: SignUpService,
		private sync: SyncService,
	) { }

	ngOnInit() {
	}

	removeAccount(copy: boolean) {
		this.loading = true;

		this.changeValuesService.changeValues(this.user.getUser().email + '_deletedON_' + new Date().getTime(), this.user.getUser().password, this.user.getUser().email)
		.subscribe(res => {
			if (res != "CHANGED") this.fail(res, copy);
			else {
				if (copy) {
					this.signUpService.logUser(this.user.getUser().email, this.user.getUser().password)
					.subscribe(res => {
						if (res.correct) this.finish(copy);
						else this.fail(res.message, copy);
					})
				} else {
					this.finish(copy);
				}
			}
		})

	}

	private finish(copy: boolean) {
		if (copy) {
			const user = this.user.getUser();
			this.user.cleanUser();
			this.user.setUser(user.email, user.password);
			this.sync.sync();
		}else{
			this.user.cleanUser();
		}
	}

	private fail(message: string, copy: boolean) {
		this.alert.set(message, true, 5000, true, "Retry", () => {this.removeAccount(copy)})
		this.loading = false;
	}

}
