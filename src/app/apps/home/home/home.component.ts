import { Component, OnInit } from '@angular/core';
import { TouchscreenService } from '../../../services/touchscreen/touchscreen.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

	constructor(
		public touch: TouchscreenService,
	) { }

	ngOnInit() {
	}

}
