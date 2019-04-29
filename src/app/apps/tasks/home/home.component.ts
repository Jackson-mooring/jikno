import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { StickScrollBarComponent } from '../../../stick-scroll-bar/stick-scroll-bar.component'
import { DataService } from 'src/app/service/data/data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class TasksHomeComponent implements OnInit {
	public isFixed = false
	constructor(
		public sharedModule: SharedModule,
		public dataService: DataService,
	) { dataService.showBottomSpace = false;
		dataService.secondaryRoute = false; 
	}

	ngOnInit() {
	}
	onScroll(top: number, header: HTMLElement) {
		if (top >= header.offsetHeight + 42.88) this.isFixed = true;
		else this.isFixed = false;
	}

}
