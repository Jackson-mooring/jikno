// tslint:disable: indent
import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
	public login = false;

	constructor(
		public routerLocation: Location,
	) { }

	ngOnInit() {
	}

}
