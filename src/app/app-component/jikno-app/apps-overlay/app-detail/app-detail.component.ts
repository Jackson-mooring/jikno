import { Component, OnInit, Input } from '@angular/core';

import { AppData } from '../../../../model/app-data';
import { SearchService } from '../../../../services/search/search.service';
import { DataService } from '../../../../services/data/data.service';

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

}
