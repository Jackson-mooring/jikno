import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JIKNO_API_ROOT, POST_HEADERS, JIKNO_API_KEY } from '../../constants/constants';
import { retry, map, catchError, timeout } from 'rxjs/operators';
import { API_Response } from '../../model/api-response';
import { ValidationResponse } from 'src/app/model/validationResponse';
import { of, Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserService } from '../user/user.service';
import { SubDataService } from '../sub-data/sub-data.service';
import { UserInfo } from '../../model/user-info';

@Injectable({
	providedIn: 'root'
})
export class AccountService {

	constructor(
		private http: HttpClient,
		private dataService: DataService,
		private userService: UserService,
		private subDataService: SubDataService,
	) {
		this.getUserInfo();
		setTimeout(() => {
			this.getUserInfo();
		}, 1000 * 60 * 10)
	}

	public userInfo: UserInfo = { }
	public loading = true;
	public error: string;

	getUserInfo() {
		this.loading = true;

		const params = `?action=get_user_info&key=${JIKNO_API_KEY}`;
		const body = `password=${this.userService.getUser().password}&email=${this.userService.getUser().email}`;
		this.http.post<API_Response>(JIKNO_API_ROOT + params, body, POST_HEADERS)
		.pipe(
			retry(3),
			map(res => this.changeValues(res)),
			catchError(err => {
				console.error(err);
				return of({correct: false, message: "Could not connect to database!"});
			}),
			timeout(40000)
		)
		.subscribe((res: ValidationResponse) => {
			console.log(res)
			if (res.correct) {
				this.userInfo = res.message;
				this.dataService.isInternet = true;
			}
			else {
				this.error = res.message;
				this.dataService.isInternet = false;
			}
			
			if (this.userInfo.username === undefined) this.userInfo.username = '';

			this.loading = false;
		})
	}

	private changeValues(res: API_Response): ValidationResponse {
		console.log(res);
		if (res.code == "OK") return { correct: true, message: res.data };
		else return { correct: false, message: res.data };
	}

	public setUserInfo(): Observable<boolean> {
		return this.subDataService.subData(JSON.stringify(this.userInfo), 'user_info')
	}

	public subData() {
		this.subDataService.subData(JSON.stringify(this.userInfo), 'user_info')
		.subscribe(res => {
			console.log(res);
		})
	}

}
