import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { DataService } from '../../../service/data/data.service';

@Component({
	selector: 'apps-overlay',
	templateUrl: './apps-overlay.component.html',
	styleUrls: ['./apps-overlay.component.sass'],
	animations: [
		trigger('zoom', [
			state('in', style({
				visibility: 'visible',
				transform: 'scale(1, 1)',
			})),
			state('out', style({
				visibility: 'hidden',
				transform: 'scale(2, 2)',
			})),
			transition('* => *', [
				animate('200ms ease-in-out'),
			])
		])
	]
})
export class AppsOverlayComponent implements OnInit {

	constructor(
		public dataService: DataService,
	) { }

	ngOnInit() {
	}

}
