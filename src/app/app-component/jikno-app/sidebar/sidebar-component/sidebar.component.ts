import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../../../../service/data/data.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.sass'],
	animations: [
		trigger('showHideBar', [
			state('in', style({
				left: '0',
			})),
			state('out', style({
				left: '-300px',
			})),
			transition('* => *', [
				animate('200ms ease-in-out'),
			])
		])
	],
})
export class SidebarComponent implements OnInit {
	constructor(
		public dataService: DataService,
		private router: Router,
		private routeLocation: Location,
	) { }

	route: string = '';

	ngOnInit() {
		this.createRouteActions();
		this.router.events.forEach((event) => {
			if (event instanceof NavigationEnd) {
				this.createRouteActions();
			}
		});
	}

	createRouteActions() {
		this.route = this.routeLocation.path()
	}

}
