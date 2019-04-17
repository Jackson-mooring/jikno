import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	constructor() { }

	public showAlert: boolean = false;
	public showCountdown: boolean = true;
	public showTimes: boolean = false;

	public countdownString: string;
	public countdownTime: number = 5;

	public expand: boolean = false;
	public onclick: Function = () => { };
	public onclose: Function = () => { };

	public reset() {
		this.showAlert = false;
		this.showCountdown = true;
		this.showTimes = false;

		this.countdownString = undefined;
		this.countdownTime = 5;

		this.expand = false;
		this.onclick = () => { };
		this.onclose = () => { };
	}
}
