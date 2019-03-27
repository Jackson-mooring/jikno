import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SearchService {

	constructor() { }

	simpleSearch(query: string, ...keys: string[]): boolean {
		if (query.length == 0) return true;
		
		if (keys.join('|').toLowerCase().replace(/ /g, '').indexOf(query.toLowerCase().replace(/ /g, '')) !== -1) return true;

		return false;
	}

}