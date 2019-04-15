import { Injectable } from '@angular/core';

import { AppData } from '../../model/app-data';
import { HttpClient } from '@angular/common/http';
import { API_Response } from '../../model/api-response';
import { JIKNO_API_ROOT, POST_HEADERS, JIKNO_API_KEY } from 'src/app/constants/constants';
import { map, retry, timeout, catchError } from 'rxjs/operators';
import { ValidationResponse } from '../../model/validationResponse';
import { of } from 'rxjs';
import { UserService } from '../user/user.service';
import { DataService } from '../data/data.service';

@Injectable({
	providedIn: 'root'
})
export class AppsOverlayService {

	error: string = '';
	loading = false;
	apps: AppData[] = []

	constructor(
		private http: HttpClient,
		private user: UserService,
		private dataService: DataService,
	) {
		this.getApps();
	}

	getApps() {
		this.loading = true;
		this.error = '';

		const queryParams = `?key=${JIKNO_API_KEY}&action=get_content`;
		const body = `email=${this.user.getUser().email}&password=${this.user.getUser().password}&branch_name=user_apps`;
		this.http.post<API_Response>(JIKNO_API_ROOT + queryParams, body, POST_HEADERS)
		.pipe(
			retry(10),
			timeout(5000),
			catchError(err => of({correct: false, message: "Could not connect to database"})),
			map((res: API_Response) => {
				if (res.data == null) res.data = [];

				if (res.code == "OK") return {
					correct: true,
					message: res.data
				}; else return {
					correct: false,
					message: "Something went wrong."
				}
			})
		)
		.subscribe((data: ValidationResponse) => {
			this.loading = false;
			if (data.correct) this.apps = data.message;
			else this.error = data.message;
		})
	}

	subData() {
		const params = `?key=${JIKNO_API_KEY}&action=sub_content`;
		const body = `email=${this.user.getUser().email}&password=${this.user.getUser().password}&branch_name=user_apps&content=${JSON.stringify(this.apps)}`;
		this.http.post<API_Response>(JIKNO_API_ROOT + params, body, POST_HEADERS)
		.pipe(
			retry(3),
			timeout(5000),
			catchError(err => of(false)),
			map((res: API_Response) => res.code == "OK" ? true : false)
		)
		.subscribe(res => {
			this.dataService.isInternet = res;
		})
	}

}
