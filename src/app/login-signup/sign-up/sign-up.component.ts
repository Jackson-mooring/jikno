import { Component, OnInit } from '@angular/core';
import { ValidateValuesService } from '../../services/validate-values/validate-values.service';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.sass'],
	animations: [
		trigger('slideError',[
			state('up', style({
				height: '35px',
			})),
			state('closed', style({
				height: '0px'
			})),
			transition('* => *', [
				animate('.3s ease-in-out')
			  ]),
		])
	]
})
export class SignUpComponent implements OnInit {
	password = '';
	email = '';
	confirmPassword = '';
	showTooltipE:boolean
	showTooltipP:boolean
	showTooltipCP:boolean
	error: string = '';
	waiting = false;

	constructor(
		public validateValuesService: ValidateValuesService,
		private signupService: SignUpService,
		private router: Router,
	) { }

	ngOnInit() {
	}

	public validatePassed(): boolean {
		if (this.validateValuesService.validatePassword(this.password).correct && this.validateValuesService.validateEmail(this.email).correct && this.password === this.confirmPassword) return true;
		return false;
	}

	subForm() {
		this.waiting = true;
		this.error = '';
		event.preventDefault();

		this.signupService.logUser(this.email, this.password)
		.subscribe(res => {
			if (res.correct) this.router.navigateByUrl('/home');
			else this.error = res.message;
			this.waiting = false;
		});
	}

}
