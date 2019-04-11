import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvatarResponse } from './avatar-response';

@Injectable({
	providedIn: 'root'
})
export class AvatarService {

	constructor(
		private http: HttpClient,
	) { }

	getAvatarValues(): AvatarResponse {
		
	}

}