import { Component, OnInit } from '@angular/core';
import { ValidateValuesService } from '../../service/validate-values/validate-values.service';

@Component({
	selector: 'app-new-password',
	templateUrl: './new-password.component.html',
	styleUrls: ['./new-password.component.sass']
})
export class NewPasswordComponent implements OnInit {

	password = '';
	confirm = '';

	passwordTooltip = false;
	confirmTooltip = false;

	constructor(
		public validateValuesService: ValidateValuesService,
	) { }

	ngOnInit() {
	}

	sub() {
		event.preventDefault();
	}

}
