import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, retry, catchError, timeout } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JIKNO_API_ROOT, POST_HEADERS, JIKNO_API_KEY } from '../../constants/constants';

@Injectable({
	providedIn: 'root'
})
export class SendEmailService {

	constructor(
		private http: HttpClient,
	) { }

	public sendEmail(content: string, email: string, subject: string): Observable<any> {
		const body = `content=${content}&email=${email}&subject=${subject}`;
		const params = "?action=email_user&key=" + JIKNO_API_KEY;
		return this.http.post(JIKNO_API_ROOT + params, body, POST_HEADERS)
		.pipe(
			map(res => {
				console.log(res);
				return "EMAILED";
			}),
			retry(3),
			timeout(5000),
			catchError(err => {
				console.error(err);
				return of("Could not connect to email");
			})
		)
	}
}
