import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../../../service/data/data.service';

@Component({
	selector: 'app-dragover',
	templateUrl: './dragover.component.html',
	styleUrls: ['./dragover.component.sass']
})
export class DragoverComponent implements OnInit {

	removed = true;
	@Input() indexData: number;

	constructor(
		private dataService: DataService,
	) { }

	ngOnInit() {
	}

	drop() {
		alert(this.indexData + " | " + this.dataService.appBeingDraggedCurrentlyInAppsOverlay);
	}

}
