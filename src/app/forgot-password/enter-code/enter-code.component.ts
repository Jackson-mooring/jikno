import { Component, OnInit } from '@angular/core';
import { RandomStringService } from 'src/app/service/random-string/random-string.service';

@Component({
	selector: 'app-enter-code',
	templateUrl: './enter-code.component.html',
	styleUrls: ['./enter-code.component.sass']
})
export class EnterCodeComponent implements OnInit {

	constructor(
		private randomStringService: RandomStringService,
	) { }

	ngOnInit() {
		alert(this.randomStringService.getRandomString(100, 'random', true, true, true));
	}

}
