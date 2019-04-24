import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ScrollService {

	constructor() { }

	private eventIsSet: boolean = false;
	private scrollFuncs = [];

	private onScroll() {
		this.scrollFuncs.map(obj=> {
			obj.func();
		})
	}

	private scrollEvent(set: boolean) {
		const scroll = document.getElementById("scrollContainer")
		if (set) scroll.addEventListener('scroll', () => this.onScroll());
		else scroll.removeEventListener('scroll', () => {});
	}

	addOnScrollFunc(func: Function, id: string) {
		if (!this.eventIsSet) this.scrollEvent(true);
		this.scrollFuncs.push({ func: func, id: id });
	}

	removeOnScrollFunc(id: string) {
		this.scrollFuncs.map(obj => {
			let newArr = [];
			if (obj.id != id) newArr.push(obj);
			this.scrollFuncs = newArr;
		})
		if (this.scrollFuncs.length == 0) this.scrollEvent(false);
	}
}
