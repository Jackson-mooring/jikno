
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
	password = '';
	email = '';
	confirmPassword = '';

	constructor() { }

	ngOnInit() {
		}

  	public validatePassed(): boolean {
		if (this.password.length < 8 || this.email.length === 0 || this.password !== this.confirmPassword) { return true; }
		return false;
	}
}
