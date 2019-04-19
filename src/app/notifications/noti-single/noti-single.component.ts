import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-noti-single',
	templateUrl: './noti-single.component.html',
	styleUrls: ['./noti-single.component.sass']
})
export class NotiSingleComponent implements OnInit {

	@Input() noti;

	constructor() { }

	ngOnInit() {
	}

}
