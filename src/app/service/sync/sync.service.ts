import { Injectable } from '@angular/core';
import { BRANCHES } from '../../constants/branches';
import { SubDataService } from '../sub-data/sub-data.service';

@Injectable({
	providedIn: 'root'
})
export class SyncService {

	isSyncing = false;

	constructor(
		private subData: SubDataService,
	) {
		this.sync();
	}

	sync() {
		this.isSyncing = true;
		var string = '';

		for (var i in BRANCHES) {
			const branch = localStorage.getItem(BRANCHES[i]);
			if (branch != null) {
				this.subData.subData(branch, i)
				.subscribe(res => {
					string += '#';
					if (string.length == BRANCHES.length) {
						this.isSyncing = false;
						alert("Everything up to date!");
					}
				})
			} else {
				string += '#';
				if (string.length == BRANCHES.length) {
					this.isSyncing = false;
					alert("Everything up to date!");
				}
			}
		}
	}

}
