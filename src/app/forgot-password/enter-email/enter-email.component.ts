import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data/data.service';



@Component({
	selector: 'app-enter-email',
	templateUrl: './enter-email.component.html',
	styleUrls: ['./enter-email.component.sass']
})
export class EnterEmailComponent implements OnInit {

	email = '';

	constructor(
		private router: Router,
		private dataService: DataService,
	) { }

	ngOnInit() {
	}

	sub(email: string) {
		this.dataService.emailForForgotPassword = email;
		this.router.navigateByUrl('forgot-password/enter-code');
	}

}
