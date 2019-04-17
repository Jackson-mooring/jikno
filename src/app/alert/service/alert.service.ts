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

	public onclick: Function = () => { };
	public onclose: Function = () => { };

	public reset() {
		this.showAlert = false;
		this.showCountdown = true;
		this.message = '';

		this.countdownString = undefined;
		this.countdownTime = 5;

		this.onclick = () => { };
		this.onclose = () => { };
	}

	private countdown() {
		setInterval(() => {
			if (this.countdownString == undefined && this.showAlert && this.showCountdown) {
				this.countdownTime--;
				if (this.countdownTime <= 0) this.reset();
				this.onclose();
			}
		}, 1000)
	}
}
