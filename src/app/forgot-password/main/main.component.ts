import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

	constructor(
		public routeLocation: Location,
	) { }

	ngOnInit() {
	}

}
