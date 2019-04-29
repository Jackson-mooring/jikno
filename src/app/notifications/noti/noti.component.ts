import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { NotiService } from '../../services/noti/noti.service';
 
@Component({
	selector: 'app-noti',
	templateUrl: './noti.component.html',
	styleUrls: ['./noti.component.sass']
})
export class NotiComponent implements OnInit {

	constructor(
		private dataService: DataService,
		public notiService: NotiService
	) { }

	ngOnInit() {
	}

}
