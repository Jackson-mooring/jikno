import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../service/data/data.service';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit, OnDestroy {
	public typing = '';
	public txt = 'The page you are looking for cannot be found on this side of the plannet.';
	public speed = 50;
	public count = 0;

	constructor(
		private activatedRoute: ActivatedRoute,
		private routeLocation: Location,
		private dataService: DataService,
	) { }

	ngOnInit() {
		console.log(this.dataService.didFindRoute);
		this.dataService.didFindRoute = false;
		this.satisfyParams();
		this.typeWriter();
	}

	public typeWriter() {
		const typeIt = setInterval(() => {
			if (this.typing.length >= this.txt.length) clearInterval(typeIt);
			this.typing += this.txt.charAt(this.count);
			this.count++;
		}, this.speed)
	}

	private satisfyParams() {
		this.activatedRoute.queryParams.subscribe(params => {
			const route = params["route"];
			if (route !== undefined) this.routeLocation.go(route);
		})
	}

	ngOnDestroy() {
		this.dataService.didFindRoute = true;
	}

}  
