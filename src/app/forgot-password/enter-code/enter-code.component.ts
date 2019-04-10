import { Component, OnInit } from '@angular/core';
import { RandomStringService } from 'src/app/service/random-string/random-string.service';
import { SendEmailService } from 'src/app/service/send-email/send-email.service';
import { DataService } from 'src/app/service/data/data.service';
import { Router } from '@angular/router';

import { RequestPasswordResset } from '../../../assets/emails/request-password-resset'

@Component({
	selector: 'app-enter-code',
	templateUrl: './enter-code.component.html',
	styleUrls: ['./enter-code.component.sass']
})
export class EnterCodeComponent implements OnInit {

	code = this.randomStringService.getRandomString(10, 'upper', true, true, false)
	status = "Sending email..."
	userCode = '';

	constructor(
		private randomStringService: RandomStringService,
		private sendEmailService: SendEmailService,
		private dataService: DataService,
		private router: Router,
	) { }

	ngOnInit() {
		if (this.dataService.emailForForgotPassword === undefined) this.router.navigateByUrl("/forgot-password/enter-email");
		this.sendEmail();
	}

	sendEmail() {
		this.status = "Sending email...";
		this.sendEmailService.sendEmail(RequestPasswordResset.replace(':code:', this.code), this.dataService.emailForForgotPassword, "Resset Password Request", true)
			.subscribe(res => {
				res.subscribe(status => {
					this.status = status;
				})
			})
	}

	async sub() {
		event.preventDefault();
		
		if (this.userCode === this.code) {
			this.dataService.resetPassword = true;
			this.router.navigateByUrl("/new-password");
		}else{
			new Audio("../../../assets/sounds/wrong.mp3").play();
			this.userCode = '';
			this.dataService.resetPassword = false;
			document.getElementById("code").classList.add("failed");
			setTimeout(() => {
				document.getElementById("code").classList.remove("failed");
			}, 200)
		}
	}

}
