import { Component, OnInit, Input } from '@angular/core';

import { AppData } from '../../../../model/app-data';
import { SearchService } from '../../../../service/search/search.service';

@Component({
	selector: 'app-detail',
	templateUrl: './app-detail.component.html',
	styleUrls: ['./app-detail.component.sass']
})
export class AppDetailComponent implements OnInit {

	@Input() appData: AppData;
	@Input() searchQuery: string;

	constructor(
		private searchService: SearchService,
	) { }

	ngOnInit() {
	}

}
