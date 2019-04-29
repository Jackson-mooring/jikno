import { Injectable } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
import { Habit } from '../../models/habit';

@Injectable({
	providedIn: 'root'
})
export class HabitsService {

	constructor(
		private getDataService: GetDataService,
	) { }

	habits: Habit;
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