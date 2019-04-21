import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';
import { AccountService } from 'src/app/service/account/account.service';
import { TouchscreenService } from 'src/app/service/touchscreen/touchscreen.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

	constructor(
		private dataService: DataService,
		public accountService: AccountService,
		public touchscreen: TouchscreenService,
	) {
		this.dataService.secondaryRoute = true; 
	}

	ngOnInit() {
	}

	changeAvatar() {
		alert("hi");
	}

}
