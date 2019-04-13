import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateValuesService } from '../../service/validate-values/validate-values.service';
import { ChangeValuesService } from 'src/app/service/change-values/change-values.service';
import { DataService } from 'src/app/service/data/data.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

	passwordTooltip = false;
	confirmTooltip = false;

	constructor(
		public validateValuesService: ValidateValuesService,
		private dataService: DataService,
		private changeValuesService: ChangeValuesService,
		private router: Router,
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
			if (res == "CHANGED") this.router.navigateByUrl("/forgot-password/continue");
			else this.error = res;
			this.loading = false;
		})
	}

}
