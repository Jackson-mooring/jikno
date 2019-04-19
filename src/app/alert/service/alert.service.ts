import { Injectable } from '@angular/core';
import { MessageBundle } from '@angular/compiler';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	constructor() {
	}

	public showAlert: boolean = false;
	public message: string = '';

	public countdownTime: number = 10;

	public linkText: string;
	public onLinkClick: Function = () => { };
	public dismissOnLinkClick: boolean = true;

	public onclick: Function = () => { };
	public onclose: Function = () => { };

	public reset() {
		this.showAlert = false;
		setTimeout(() => {
			this.message = '';

			this.countdownTime = 5000;

			this.linkText = undefined;
			this.onLinkClick = () => { };
			this.dismissOnLinkClick = true;

			this.onclick = () => { };
			this.onclose = () => { };
		}, 300)
	}

	public set(
		message: string,
		countdown: boolean,

		countDownTime: number = 10,
		dismissOnLinkClick: boolean = true,

		linkText?: string,
		onLinkClick?: Function,

		onclick: Function = () => { },
		onclose: Function = () => { },
	) {
		this.reset();
		setTimeout(() => {
			this.showAlert = true;
			this.countdownTime = countDownTime;
			this.message = message;
			this.onclick = onclick;
			this.onclose = onclose;
			this.dismissOnLinkClick = dismissOnLinkClick;
			this.linkText = linkText;
			this.onLinkClick = onLinkClick;

			if (countdown) this.countdown();
		}, 300)
	}

	private countdown() {
		setTimeout(() => {
			this.onclose();
			this.reset();
		}, this.countdownTime)
	}

	public clickLink() {
		this.onLinkClick();
		if (this.dismissOnLinkClick) this.reset();
	}
}
