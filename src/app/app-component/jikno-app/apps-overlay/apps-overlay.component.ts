import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { DataService } from '../../../service/data/data.service';

import { AppData } from '../../../model/app-data';

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
	apps: AppData[] = [
		{
			branch: "example_app",
			route: '/example_app',
			name: "Example App",
			icon: "../../../../assets/logo-200.png",
			active_by_user: true,
			popularity: 0.5,
			description: "This is an example app",
		},
		{
			branch: "fake_software",
			route: '/fake_software',
			name: "Fake Software",
			icon: "../../../../assets/logo-200.png",
			active_by_user: true,
			popularity: 0.5,
			description: 'This is a fake software',
		}
	]

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
