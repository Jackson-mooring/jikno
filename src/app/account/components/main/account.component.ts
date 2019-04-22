import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data/data.service';
import { AccountService } from 'src/app/service/account/account.service';
import { TouchscreenService } from 'src/app/service/touchscreen/touchscreen.service';
import { UploadFileService } from 'src/app/service/upload-file/upload-file.service';
import { FileUploader } from 'ng2-file-upload';
import { JIKNO_API_KEY, JIKNO_API_ROOT } from '../../../constants/constants';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

	url = `${JIKNO_API_ROOT}?action=upload_file&key=${JIKNO_API_KEY}`;
	//url = `${JIKNO_API_ROOT}test.php`

	constructor(
		private dataService: DataService,
		public accountService: AccountService,
		public touchscreen: TouchscreenService,
		private uploadFileService: UploadFileService,
	) {
		this.dataService.secondaryRoute = true;
	}

	public uploader = new FileUploader({ url: this.url })

	ngOnInit() {
	}

	changeAvatar() {
		let input = (<HTMLInputElement>document.getElementById('mainAccountComponentFileChooser'))
		input.click();
	}

	uploadImage() {
		event.preventDefault();
		
		let image = (<HTMLInputElement>document.getElementById('mainAccountComponentFileChooser')).files[0]

		let file: FormData = new FormData();
		file.append('file', image, image.name);

		this.uploadFileService.upload(file)
		.subscribe(res => {
			console.log(res);
		})
	}

}
