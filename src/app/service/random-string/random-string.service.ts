import { Injectable } from '@angular/core';
import { CHARS, NUMBERS, SPECIAL_CHARS } from '../../constants/constants';

import { RandomNumberService } from '../random-number/random-number.service';

@Injectable({
	providedIn: 'root'
})
export class RandomStringService {

	constructor(
		private randomNumberService: RandomNumberService,
	) { }

	public getRandomString(
		length: number,
		type: string,
		chars?: boolean,
		numbers?: boolean,
		spicalChars?: boolean
	): string {
		var string = '';
		for (var i = 1; i <= length; i++) {
			var threeTypes = [ ];
			if (type === 'upper') {
				if (chars) threeTypes.push(CHARS[ this.randomNumberService.getNumber(0, CHARS.length - 1) ].toUpperCase());
				if (numbers) threeTypes.push(NUMBERS[ this.randomNumberService.getNumber(0, NUMBERS.length - 1) ].toUpperCase());
				if (spicalChars) threeTypes.push(SPECIAL_CHARS[ this.randomNumberService.getNumber(0, SPECIAL_CHARS.length - 1)].toUpperCase());
			}
			else if (type === 'lower') {
				if (chars) threeTypes.push(CHARS[ this.randomNumberService.getNumber(0, CHARS.length - 1) ].toLowerCase());
				if (numbers) threeTypes.push(NUMBERS[ this.randomNumberService.getNumber(0, NUMBERS.length - 1) ].toLowerCase());
				if (spicalChars) threeTypes.push(SPECIAL_CHARS[ this.randomNumberService.getNumber(0, SPECIAL_CHARS.length - 1)].toLowerCase());
			}
			else if (type === 'random') {
				if (chars) threeTypes.push(CHARS[ this.randomNumberService.getNumber(0, CHARS.length - 1) ]);
				if (numbers) threeTypes.push(NUMBERS[ this.randomNumberService.getNumber(0, NUMBERS.length - 1) ]);
				if (spicalChars) threeTypes.push(SPECIAL_CHARS[ this.randomNumberService.getNumber(0, SPECIAL_CHARS.length - 1)]);
				
				if (this.randomNumberService.getNumber(0, 1) === 0) string += threeTypes[ this.randomNumberService.getNumber(0, threeTypes.length -1)].toLowerCase();
				else  string += threeTypes[ this.randomNumberService.getNumber(0, threeTypes.length -1)].toUpperCase();
			}

			if (type !== 'random') string += threeTypes[ this.randomNumberService.getNumber(0, threeTypes.length -1)];
		}
		return string;
	}

}
