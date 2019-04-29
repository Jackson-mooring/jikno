import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { AccountService } from '../../../services/account/account.service';
import { TouchscreenService } from '../../../services/touchscreen/touchscreen.service';
import { UploadFileService } from '../../../services/upload-file/upload-file.service';
import { UserService } from '../../../services/user/user.service';
import { JIKNO_API_ROOT } from '../../../constants/constants';
import { SyncService } from '../../../services/sync/sync.service';
import { RandomNumberService } from '../../../services/random-number/random-number.service';
import { AlertService } from '../../../alert/service/alert.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

	constructor(
		private dataService: DataService,
		public accountService: AccountService,
		public touchscreen: TouchscreenService,
		private uploadFileService: UploadFileService,
		private user: UserService,
		private syncService: SyncService,
		private randomNumberService: RandomNumberService,
		private alert: AlertService,
	) { }

	ngOnInit() {
	}

	changeAvatar() {
		let input = (<HTMLInputElement>document.getElementById('mainAccountComponentFileChooser'))
		input.click();
	}

	uploadImage() {
		event.preventDefault();
		
		let image = (<HTMLInputElement>document.getElementById('mainAccountComponentFileChooser')).files[0]

		let newName = this.changeName(image.name);
		if (newName === this.accountService.userInfo.avatar) this.uploadImage();

		let file: FormData = new FormData();
		file.append('file', image, newName);

		this.uploadFileService.upload(file)
		.subscribe(res => {
			if (res.correct) {
				this.accountService.userInfo.avatar = `${JIKNO_API_ROOT}cloud/avatars/${newName}`;
				this.accountService.setUserInfo()
				.subscribe(res => {
					this.syncService.sync();
				})
			}
		})
	}

	changeName(name: string): string {
		const dotsTest = name;
		let lastDotIndex: number;
		dotsTest.split('').map((char, index) => {
			if (char === '.') lastDotIndex = index;
		})

		return `${this.user.getUser().email}${this.randomNumberService.getNumber(0, 90000)}${name.slice(lastDotIndex)}`
	}

	logoutTries = 0;
	logout() {
		if (this.dataService.isInternet || !this.syncService.isChanges()) {
			this.user.cleanUser();
			return 0;
		}
		else this.syncService.sync();

		setTimeout(() => {
			this.logoutTries++
			if (this.logoutTries <= 2) this.logout();
			else this.logoutTries == 0;
		}, 3000);
	}

}
