import { Component, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {

	constructor(
		public a: AlertService,
	) { }

	ngOnInit() {
	}

}
