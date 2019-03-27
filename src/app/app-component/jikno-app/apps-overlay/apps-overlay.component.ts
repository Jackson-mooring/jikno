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
		]),
		trigger('fade', [
			state('hidden', style({
				opacity: '0',
			})),
			state('visible', style({
				opacity: '1',
			})),
			transition('* => *', [
				animate('600ms ease-in-out')
			])
		])
	]
})
export class AppsOverlayComponent implements OnInit {

	noDismissClick = false;
	searchQuery = '';

	constructor(
		private dataService: DataService,
	) { }

	ngOnInit() {
		this.childClick()
	}

	coverClick() {
		if (!this.noDismissClick) this.dismiss();
		this.noDismissClick = false;
	}

	childClick() {
		const no = document.getElementsByClassName('no-dismiss');
		for (
			var elementNumber = 0;
			elementNumber < no.length;
			elementNumber++
		) {
			no.item(elementNumber).addEventListener('click', (event) => {
				this.noDismissClick = true;
			})
		}
	}

	dismiss() {
		this.dataService.showAppsOverlay = false;
		this.dataService.blur = false;
	}

}
