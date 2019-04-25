import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data/data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor(
		private dataService: DataService,
	) {
		this.dataService.secondaryRoute = false;
		this.dataService.showBottomSpace = false;
	}

	isFixed: boolean = false;

	ngOnInit() {
	}

	onScroll(top: number, header: HTMLElement) {
		if (top >= header.offsetHeight + 42.88) this.isFixed = true;
		else this.isFixed = false;
	}

}
