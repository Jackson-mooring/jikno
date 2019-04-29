import { Injectable } from '@angular/core';
import { JIKNO_API_KEY, JIKNO_API_ROOT, POST_HEADERS } from '../../constants/constants';
import { UserService } from '../user/user.service';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { timeout, retry, catchError, map } from 'rxjs/operators';
import { API_Response } from '../../models/api-response';
import { DataService } from '../data/data.service';

@Injectable({
	providedIn: 'root'
})
export class SubDataService {

	constructor(
		private user: UserService,
		private http: HttpClient,
		private dataService: DataService,
	) { }

	subData(content: string, branch: string): Observable<boolean> {
		const params = `?key=${JIKNO_API_KEY}&action=sub_content`;
		const body = `email=${this.user.getUser().email}&password=${this.user.getUser().password}&branch_name=${branch}&content=${content}`;
		return this.http.post<API_Response>(JIKNO_API_ROOT + params, body, POST_HEADERS)
		.pipe(
			retry(3),
			timeout(5000),
			catchError(err => {
				this.logFailure(content, branch);
				return of(false)
			}),
			map((res: API_Response) => {
				const data = res.code == "OK" ? true : false;
				this.dataService.isInternet = data;
				if (!data) this.logFailure(content, branch);
				return data;
			})
		)
	}

	logFailure(content: string, branch: string) {
		localStorage.setItem(branch, content);
	}

}
