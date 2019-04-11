import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JIKNO_API_ROOT, POST_HEADERS, JIKNO_API_KEY } from '../../constants/constants';
import { retry, timeout, catchError, map } from 'rxjs/operators';

import { API_Response } from '../../model/api-response';

@Injectable({
	providedIn: 'root'
})
export class ChangeValuesService {

	constructor(
		private http: HttpClient,
	) { }

	changeValues(email: string, password: string): Observable<any> {
		const params = `?action=change_values&key=${JIKNO_API_KEY}`;
		return this.http.post<API_Response>(JIKNO_API_ROOT + params, `email=${email}&password=${password}`, POST_HEADERS)
		.pipe(
			retry(3),
			timeout(5000),
			catchError(err => {
				console.error(err);
				return of("Could not connect to database");
			}),
			map((res: API_Response) => {
				console.log(res);
				return this.change(res);
			})
		)
	}

	private change(value: API_Response) {
		if (value.code != "OK") {
			console.error(`${value.code} - ${value.data}`)
			if (value.code == "FAILED") return "The server crashed - please try again later.";
			else return "ERROR!"
		}
		else return "CHANGED";
	}

}
