import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { DataService } from '../../../service/data/data.service';
import { SearchService } from 'src/app/service/search/search.service';
import { AppsOverlayService } from '../../../service/apps-overlay/apps-overlay.service'; 

@Component({
	selector: 'apps-overlay',
	templateUrl: './apps-overlay.component.html',
	styleUrls: ['./apps-overlay.component.sass'],
	animations: [
		trigger('zoom', [
			state('in', style({
				visibility: 'visible',
				transform: 'scale(1, 1)',
				opacity: '1',
			})),
			state('out', style({
				visibility: 'hidden',
				transform: 'scale(1.5, 1.5)',
				opacity: '0',
			})),
			transition('* => *', [
				animate('300ms ease-in-out'),
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
	results = true;

	constructor(
		public dataService: DataService,
		private searchService: SearchService,
		public appsOverlayService: AppsOverlayService,
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

	checkResults() {
		let results = false;

		if (this.appsOverlayService.apps == null) this.results = results;
		else {
			this.appsOverlayService.apps.map(app => {
				if (this.searchService.simpleSearch(this.searchQuery, app.name, app.keyWords.join('|'))) results = true
			})
		}

		this.results = results;
	}

	getIndex(data: any): number {
		var val = 0;
		this.appsOverlayService.apps.map( (app, index) => {
			if (app === data) val = index;
		})
		return val;
	}

	stringIs(string: string): boolean {
		return string.length != 0;
	}

}
