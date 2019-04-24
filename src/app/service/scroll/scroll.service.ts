import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ScrollService {

	constructor() {
		document.addEventListener('scroll', () => this.onScroll());
	}

	private scrollFuncs = [];

	private onScroll() {
		this.scrollFuncs.map(obj=> {
			obj.func();
		})
	}

	addOnScrollFunc(func: Function, id: string) {
		this.scrollFuncs.push({ func: func, id: id });
	}

	removeOnScrollFunc(id: string) {
		this.scrollFuncs.map(obj => {
			let newArr = [];
			if (obj.id != id) newArr.push(obj);
			this.scrollFuncs = newArr;
		})
	}
}
