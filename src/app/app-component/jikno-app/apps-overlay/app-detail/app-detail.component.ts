import { Component, OnInit, Input } from '@angular/core';

import { AppData } from '../../../../model/app-data';

@Component({
	selector: 'app-detail',
	templateUrl: './app-detail.component.html',
	styleUrls: ['./app-detail.component.sass']
})
export class AppDetailComponent implements OnInit {

	@Input() appData: AppData;
	@Input() searchQuery: string;

	constructor() { }

	ngOnInit() {
	}

}
