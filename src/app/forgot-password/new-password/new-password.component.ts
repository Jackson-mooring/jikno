import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ValidateValuesService } from '../../service/validate-values/validate-values.service';
import { ChangeValuesService } from '../../service/change-values/change-values.service';
import { DataService } from '../../service/data/data.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../../service/user/user.service';

@Component({
	selector: 'app-new-password',
	templateUrl: './new-password.component.html',
	styleUrls: ['./new-password.component.sass'],
	animations: [
		trigger('slide', [
			state('up', style({
				height: '0',
			})),
			state('down', style({
				height: 'auto',
			})),
			transition('* => *', [
				animate('500ms ease'),
			])
		])
	]
})
export class NewPasswordComponent implements OnInit, OnDestroy {

	password = '';
	confirm = '';
	error = '';
	loading = false;

	@Input() onComplete: Function = () => {this.router.navigateByUrl("/forgot-password/continue")};
	@Input() setUserPassword: boolean = false;

	passwordTooltip = false;
	confirmTooltip = false;

	constructor(
		public validateValuesService: ValidateValuesService,
		private dataService: DataService,
		private changeValuesService: ChangeValuesService,
		private router: Router,
		private user: UserService,
	) { }

	ngOnInit() {
		if(!this.dataService.resetPassword) this.router.navigateByUrl('/forgot-password/enter-email');
	}

	ngOnDestroy() {
		this.dataService.resetPassword = false;
	}

	sub() {
		this.loading = true;
		this.error = '';
		event.preventDefault();
		this.changeValuesService.changeValues(this.dataService.emailForForgotPassword, this.password)
		.subscribe(res => {
			if (res == "CHANGED") {
				if (this.setUserPassword) this.user.setUser(this.user.getUser().email, this.password);
				this.onComplete();
			}
			else this.error = res;
			this.loading = false;
		})
	}

}
