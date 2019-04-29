import { Component, OnInit, Input } from '@angular/core';
import { DateService } from 'src/app/services/date/date.service';

@Component({
	selector: 'app-noti-single',
	templateUrl: './noti-single.component.html',
	styleUrls: ['./noti-single.component.sass']
})
export class NotiSingleComponent implements OnInit {

	@Input() noti;
	
	date: string = '';

	constructor(
		public dateService: DateService
	) { }

	ngOnInit() {
		this.countDate();
	}

	countDate() {
		this.date = this.dateService.auto(this.noti.date);
		setInterval(() => {
			this.date = this.dateService.auto(this.noti.date);
		}, 1000);
	}
}
