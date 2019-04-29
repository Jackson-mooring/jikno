import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DateService {
	public date = '';
	constructor() { }

	auto(date: number) {
		let then = (new Date().getTime() - date) / 1000;

		if (then < 3) this.date = 'Just now'
		if (then > 3 && then < 59 ) this.date = `${Math.ceil(then)} seconds ago`
		if (then > 59 && then < 120) this.date = `About a miniute ago`

		then = (new Date().getTime() - date) / 60000;


		if (then >= 2 && then < 61 ) this.date = `About ${ Math.ceil(then) } miniutes ago`

		then = (new Date().getTime() - date) / (60000 * 60);


		if (then >= 1 && then < 2 ) this.date = `About an hour ago`
		if (then >= 2 && then < 24 ) this.date = `About ${ Math.ceil(then) } hours ago`

		then = (new Date().getTime() - date) / ((60000 * 60 ) * 24);


		if (then >= 1 && then < 2 ) this.date = `About a day ago`
		if (then >= 2 && then < 7 ) this.date = `About ${ Math.ceil(then)} days ago`

		then = (new Date().getTime() - date) / ((60000 * 60 ) * 24 * 7);


		if (then >= 1 && then < 2 ) this.date = `About a week ago`
		if (then >= 2 && then < 4 ) this.date = `About ${ Math.ceil(then)} weeks ago`

		then = (new Date().getTime() - date) / ((60000 * 60 ) * 24 * 7 * 4);

		if (then >= 1 && then < 2 ) this.date = `About a month ago`
		if (then >= 1 && then < 12 ) this.date = `About ${ Math.ceil(then)} weeks ago`

		then = (new Date().getTime() - date) / ((60000 * 60 ) * 24 * 7 * 52);

		if (then >= 1 && then < 2 ) this.date = `About a year ago`
		if (then >= 2) this.date = `About ${ Math.ceil(then)} years ago`


		return this.date;
	}
}
