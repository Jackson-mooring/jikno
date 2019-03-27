import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SearchService {

	constructor() { }

	search(query: string, keys?: any[]): boolean {
		return true;
	}

}