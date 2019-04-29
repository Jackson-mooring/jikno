import { Injectable } from '@angular/core';

import { ValidationResponse } from '../../models/validationResponse';

@Injectable({
	providedIn: 'root'
})
export class ValidateValuesService {

	constructor() { }

	validateEmail(email: string): ValidationResponse {
		const expression = /.+@.+\.(com|net|org|CLUB|io)/;
		if (expression.test(email)) return {
			correct: true,
			message: 'Looks good!',
		};
		else return {
			correct: false,
			message: "Please use a valid email..."
		}
	}

	validatePassword(password: string): ValidationResponse {
		if (password.length >= 8) return {
			correct: true,
			message: 'Looks good!',
		};
		else return {
			correct: false,
			message: "Please use at least 8 characters..."
		}
	}
}
