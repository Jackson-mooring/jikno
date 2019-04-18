import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	constructor() {
		this.countdown();
	}

	public showAlert: boolean = false;
	public showCountdown: boolean = true;
	public message: string = '';

	public countdownString: string;
	public countdownTime: number = 10;

	public linkText: string;
	public onLinkClick: Function = () => { };
	public dismissOnLinkClick: boolean = true;

	public onclick: Function = () => { };
	public onclose: Function = () => { };

	public reset() {
		this.showAlert = false;
		this.showCountdown = true;
		this.message = '';

		this.countdownString = undefined;
		this.countdownTime = 5;

		this.linkText = undefined;
		this.onLinkClick = () => { };
		this.dismissOnLinkClick = true;

		this.onclick = () => { };
		this.onclose = () => { };
	}

	private countdown() {
		setInterval(() => {
			if (this.countdownString == undefined && this.showAlert && this.showCountdown) {
				this.countdownTime--;
				if (this.countdownTime <= 0) {
					this.onclose();
					this.reset();
				}
			}
		}, 1000)
	}

	public clickLink() {
		this.onLinkClick();
		if (this.dismissOnLinkClick) this.reset();
	}
}
