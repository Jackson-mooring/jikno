import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AvatarResponse } from './avatar-response';
import { HttpClient } from '@angular/common/http';
import { API_Response } from 'src/app/model/api-response';
import { JIKNO_API_ROOT, POST_HEADERS, JIKNO_API_KEY } from '../../constants/constants';
import { retry, timeout, catchError, map } from 'rxjs/operators';
import { UserService } from 'src/app/service/user/user.service';

@Injectable({
	providedIn: 'root'
})
export class AvatarService {

	constructor(
		private http: HttpClient,
		private user: UserService,
	) { }

	getAvatar(): Observable<AvatarResponse> {
		const params = `?action=get_user_info&key=${JIKNO_API_KEY}`;
		const body = `email=${this.user.getUser().email}&password=${this.user.getUser().password}`;
		return this.http.post<API_Response>(JIKNO_API_ROOT + params, body, POST_HEADERS)
			.pipe(
				retry(3),
				timeout(5000),
				catchError(err => of({
					image: '',
					color: '#021c55',
					letter: '',
					error: true,
				})),
				map((res: API_Response) => this.manipulateValues(res))
			)
	}

	private manipulateValues(values: API_Response): AvatarResponse {
		if (values.code != "OK") return {
			color: '#021c55',
			letter: '',
			image: '',
			error: true
		}
		if (this.user.isUser) return {
			color: values.data.avatar ? '' : (values.data.color ? values.data.color : '#021c55'),
			letter: values.data.avatar ? '' : (this.user.getUser().email.charAt(0).toUpperCase()),
			image: values.data.avatar ? values.data.avatar : '',
			error: false
		}; else {
			return {
				color: '#021c55',
				letter: '',
				image: '',
				error: true
			}
		}
	}
}