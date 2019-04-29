import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ValidationResponse } from '../../model/validationResponse';
import { HttpClient } from '@angular/common/http';
import { API_Response } from '../../model/api-response';
import { POST_HEADERS, JIKNO_API_ROOT, JIKNO_API_KEY } from '../../constants/constants';
import { map, catchError, timeout, retry } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
	providedIn: 'root'
})
export class SignUpService {

	email: string;
	password: string;

	constructor(
		private http: HttpClient,
		private userService: UserService
	) { }

	public logUser(email: string, password: string): Observable<ValidationResponse> {
		this.email = email;
		this.password = password;

		const params = `?key=${JIKNO_API_KEY}&action=create_user`
		const body = `email=${email}&password=${password}`
		return this.http.post<API_Response>(JIKNO_API_ROOT + params, body, POST_HEADERS)
			.pipe(
				map((res: API_Response) => this.changeVals(res)),
				catchError(err => {
					console.error(err);
					return of({ correct: false, message: "Could not connect to database" });
				}),
				timeout(5000),
				retry(3)
			)
	}
	private changeVals(data: API_Response): ValidationResponse {
		let correct = false
		let message = ''

		if (data.code === 'OK') {
			correct = true;
			message = 'Sign up was successful!';
			this.userService.setUser(this.email, this.password);
		} else if (data.code === 'ACCOUNT_EXISTS') {
			correct = false;
			message = 'This account already exists.'
		} else {
			correct = false
			message = 'Something went wrong.  Please try again.'
		}


		return {
			correct: correct,
			message: message
		}
	}
}
