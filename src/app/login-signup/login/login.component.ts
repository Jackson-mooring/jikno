import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login/login.service';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass'],
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
export class LoginComponent implements OnInit {
	password = '';
	email = '';

	error = '';

	constructor(
		private loginService: LoginService
	) { }

	ngOnInit() {
	}
	subForm() {
		this.error = '';
		event.preventDefault();

		this.loginService.logUser(this.email, this.password)
		.subscribe(res => {
			if (res.correct) alert("Logged");
			else this.error = res.message;
		});
	}
}
