import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';
import { NotiService } from '../../service/noti/noti.service';
 
@Component({
	selector: 'app-noti',
	templateUrl: './noti.component.html',
	styleUrls: ['./noti.component.sass']
})
export class NotiComponent implements OnInit {

	constructor(
		private dataService: DataService,
		public notiService: NotiService
	) {
		this.dataService.secondaryRoute = true;
	}

	ngOnInit() {
	}

}
