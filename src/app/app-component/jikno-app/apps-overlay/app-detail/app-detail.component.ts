import { Component, OnInit, Input } from '@angular/core';

import { AppData } from '../../../../model/app-data';
import { SearchService } from '../../../../service/search/search.service';
import { DataService } from 'src/app/service/data/data.service';

@Component({
	selector: 'app-detail',
	templateUrl: './app-detail.component.html',
	styleUrls: ['./app-detail.component.sass']
})
export class AppDetailComponent implements OnInit {

	@Input() appData: AppData;
	@Input() searchQuery: string;

	removed = false;

	constructor(
		public searchService: SearchService,
		public dataService: DataService
	) { }

	ngOnInit() {
	}

	startDrag() {
		this.removed = true;
		this.dataService.appBeingDraggedCurrentlyInAppsOverlay = this.appData.branch;
	}

}
