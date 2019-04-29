import { Injectable } from '@angular/core';
import { JIKNO_API_KEY, JIKNO_API_ROOT, POST_HEADERS } from '../../constants/constants';
import { UserService } from '../user/user.service';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { timeout, retry, catchError, map } from 'rxjs/operators';
import { API_Response } from '../../models/api-response';
import { DataService } from '../data/data.service';
import { ValidationResponse } from 'src/app/models/validationResponse';

@Injectable({
	providedIn: 'root'
})
export class GetDataService {

	constructor(
		private user: UserService,
		private http: HttpClient,
		private dataService: DataService,
	) { }

	getData(branch: string): Observable<ValidationResponse> {
		const params = `?key=${JIKNO_API_KEY}&action=get_content`;
		const body = `email=${this.user.getUser().email}&password=${this.user.getUser().password}&branch_name=${branch}`;
		return this.http.post<API_Response>(JIKNO_API_ROOT + params, body, POST_HEADERS)
		.pipe(
			retry(3),
			timeout(5000),
			catchError(err => {
				console.error(err);
				this.dataService.isInternet = false;
				return of({ correct: false, message: "Could not connect to database!" });
			}),
			map((res: API_Response) => {
				this.dataService.isInternet = true;
				if (res.code == "OK") {
					return { correct: true, message: res.data };
				}
				else {
					console.error(res.code, res.data);
					return { correct: false, message: res.data };
				}
			})
		)
	}

}
