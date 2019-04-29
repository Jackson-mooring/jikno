import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, retry, catchError, timeout } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { JIKNO_API_ROOT, POST_HEADERS, JIKNO_API_KEY } from '../../constants/constants';
import { DataService } from '../data/data.service';

@Injectable({
	providedIn: 'root'
})
export class CheckEmailService {

	constructor(
		private http: HttpClient,
		private dataService: DataService,
	) { }

	public validate(email: string): Observable<boolean> {
		const body = `email=${email}`;
		const params = "?action=validate_email&key=" + JIKNO_API_KEY;
		return this.http.post<any>(JIKNO_API_ROOT + params, body, POST_HEADERS)
		.pipe(
			map(res => {
				console.log(res);
				this.dataService.isInternet = true;
				if (res.code === "OK") return true;
				this.dataService.isInternet = false;
				return false;
			}),
			retry(3),
			timeout(5000),
			catchError(err => {
				this.dataService.isInternet = false;
				console.error(err);
				return of(false);
			})
		)
	}
}
