import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

	constructor(
		private dataService: DataService,
	) {
		this.dataService.secondaryRoute = true;
	}

	ngOnInit() {
	}

}
