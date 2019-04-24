import { Injectable } from '@angular/core';
import { GetDataService } from 'src/app/service/get-data/get-data.service';

@Injectable({
	providedIn: 'root'
})
export class HabitsService {

	constructor(
		private getDataService: GetDataService,
	) { }

	habits: any = []
	loading: boolean = true;
	error: boolean = false;
	errorMsg: string;

	public getHabits() {
		this.getDataService.getData('habits')
		.subscribe(res => {
			if (res.correct) this.habits = res.message;
			else {
				this.error = true;
				this.errorMsg = res.message;
			}
			this.loading = false;
		})
	}

}
