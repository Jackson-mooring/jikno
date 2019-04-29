import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-stick-scroll-bar',
	templateUrl: './stick-scroll-bar.component.html',
	styleUrls: ['./stick-scroll-bar.component.sass']
})
export class StickScrollBarComponent implements OnInit {
	isFixed: boolean = false;
	constructor() { }

	@Input() HTMLElement
	ngOnInit() {
	}

	onScroll(top: number, header: HTMLElement) {
		if (top >= header.offsetHeight + 42.88) this.isFixed = true;
		else this.isFixed = false;
	}
}
