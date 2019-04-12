import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { trigger, state, style, transition, animate } from '@angular/animations';

import { DataService } from '../../service/data/data.service';
import { AppRoutes } from 'src/app/routing/app-routes';

@Component({
	selector: 'jikno-app',
	templateUrl: './jikno-app.component.html',
	styleUrls: ['./jikno-app.component.sass'],
	animations: [
		trigger('blurInOut', [
			state('in', style({
				filter: 'blur(20px)',
			})),
			state('out', style({
				filter: 'blur(0px)',
			})),
			transition('* => *', [
				animate('200ms ease-in-out'),
			])
		]),
	]
})
export class JiknoAppComponent implements OnInit {

	constructor(
		public dataService: DataService,
		private routeLocation: Location,
		private router: Router,
	) { }

	ngOnInit() {
	}

	goBack() {
		if (this.dataService.routes.length > 1) this.routeLocation.back();
		else this.router.navigateByUrl(this.newRoute());
	}

	newRoute(): string {
		var newRoute: string;
		AppRoutes.map(route => {
			if (this.routeLocation.path().indexOf(route) != -1) newRoute = route;
		})
		if (newRoute === undefined) return "/home";
		return newRoute;
	}

}
