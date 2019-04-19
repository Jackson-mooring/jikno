import { Injectable } from '@angular/core';
import { Noti } from '../../model/noti'

@Injectable({
	providedIn: 'root'
})
export class NotiService {

	constructor() { }
	public notifications: Noti[] = [
		
	]
}
