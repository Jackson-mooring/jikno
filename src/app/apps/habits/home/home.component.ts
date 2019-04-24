import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data/data.service';
import { ScrollService } from '../../../service/scroll/scroll.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor(
		private dataService: DataService,
		private scroll: ScrollService,
	) {	}

	isFixed: boolean = false;

	private scrollID = String(new Date().getTime());

	ngOnInit() {
		this.scroll.addOnScrollFunc(() => {
			this.onScroll();
		}, this.scrollID)
	}

	onScroll() {
		const scrollTop = document.scrollingElement.scrollTop;
		const header = document.getElementById('header').offsetHeight;
		
		if (scrollTop >= header) this.isFixed = true;
		else this.isFixed = false;
	}

}
