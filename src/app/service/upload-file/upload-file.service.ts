import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ValidationResponse } from '../../model/validationResponse';
import { API_Response } from '../../model/api-response';
import { JIKNO_API_ROOT, IMAGE_HEADERS, JIKNO_API_KEY } from '../../constants/constants';
import { timeout, retry, catchError, map } from 'rxjs/operators';
import { DataService } from '../data/data.service';

@Injectable({
	providedIn: 'root'
})
export class UploadFileService {

	constructor(
		private http: HttpClient,
		private dataService: DataService,
	) { }

	upload(file): Observable<ValidationResponse> {
		const params = `action=upload_file&key=${JIKNO_API_KEY}`;
		return this.http.post<API_Response>(JIKNO_API_ROOT + params, file, IMAGE_HEADERS)
		.pipe(
			retry(3),
			timeout(5000),
			catchError((err: API_Response) => {
				console.error(err);
				return of({ correct: false, message: "FAILED" });
			}),
			map((res: API_Response) => {
				this.dataService.isInternet = true;
				if (res.code = "OK") return { correct: true, message: "File upload is fine!" }
				else return { correct: false, message: res.data }
			})
		)
	}

}
