import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { Router } from '@angular/router';

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
		private loginService: LoginService,
    private router: Router,
	) { }

	ngOnInit() {
	}

	subForm() {
		this.error = '';
		event.preventDefault();

		this.loginService.logUser(this.email, this.password)
		.subscribe(res => {
			if (res.correct) this.router.navigateByUrl('/home');
			else this.error = res.message;
		});
	}
}
