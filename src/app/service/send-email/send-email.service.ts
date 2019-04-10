import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
			retry(3),
			catchError(err => "Could not connect to email"),
			map(res => "EMAILED"),
			timeout(5000)
		)
	}
}
