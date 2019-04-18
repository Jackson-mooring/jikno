import { Component, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.sass'],
	animations: [
		trigger('slide', [
			state('up', style({
				position: 'fixed',
				bottom: '15px',
				visibility: 'visible'
			})),
			state('down', style({
				position: 'fixed',
				bottom: '-100vh',
				visibility: 'visible'
			})),
			transition('* => *', [
				animate('300ms ease')
			])
		])
	]
})
export class AlertComponent implements OnInit {

	constructor(
		public a: AlertService,
	) { }

	ngOnInit() {
	}

}
