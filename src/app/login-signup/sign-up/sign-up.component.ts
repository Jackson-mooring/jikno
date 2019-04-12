import { Component, OnInit } from '@angular/core';
import { ValidateValuesService } from '../../service/validate-values/validate-values.service'

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
	password = '';
	email = '';
	confirmPassword = '';
	showTolltipE:boolean
	showTolltipP:boolean
	showTolltipCP:boolean

	constructor(
		public validateValuesService: ValidateValuesService
	) { }

	ngOnInit() {
	}
	public validatePassed(): boolean {
		if (this.validateValuesService.validatePassword(this.password).correct && this.validateValuesService.validateEmail(this.email).correct && this.password === this.confirmPassword) return true;
		return false;
	}

}
