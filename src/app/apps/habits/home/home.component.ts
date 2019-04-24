import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data/data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor(
		private dataService: DataService,
	) {	}

	ngOnInit() {
	}

}
