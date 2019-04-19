import { Injectable } from '@angular/core';
import { BRANCHES } from '../../constants/branches';
import { SubDataService } from '../sub-data/sub-data.service';
import { DataService } from '../data/data.service';
import { AlertService } from '../../alert/service/alert.service';

@Injectable({
	providedIn: 'root'
})
export class SyncService {

	isSyncing = false;

	constructor(
		private subData: SubDataService,
		private dataService: DataService,
		private alertService: AlertService,
	) {
		this.sync(false);
	}

	sync(sendStatus?: boolean) {
		if (sendStatus === undefined) sendStatus = true;

		this.isSyncing = true;
		var string = '';

		for (var i in BRANCHES) {
			const branch = localStorage.getItem(BRANCHES[i]);
			if (branch != null) {
				this.subData.subData(branch, i)
				.subscribe(res => {
					string += res ? '1' : '0';
					if (string.length == BRANCHES.length) {
						this.isSyncing = false;
						if (sendStatus) this.check(string);
					}
				})
			} else {
				string += '1';
				if (string.length == BRANCHES.length) {
					this.isSyncing = false;
					if (sendStatus) this.check(string);
				}
			}
		}
	}

	check(str: string) {
		setTimeout(() => {
			if (str.indexOf('0') === -1) {
				if (this.dataService.isInternet) this.showAlert(true);
				else this.showAlert(false);
			}else{
				this.showAlert(false);
			}
		}, 1000)
	}

	showAlert(positive: boolean) {
		this.alertService.reset();
		this.alertService.showAlert = true;
		this.alertService.showCountdown = false;
		this.alertService.message = positive ? "Everything up to date!" : "Could not connect to database!";
		if (!positive) {
			this.alertService.linkText = "Retry";
			this.alertService.onLinkClick = () => {this.sync()}
		}
	}

}