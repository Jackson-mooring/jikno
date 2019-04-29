import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../../../services/data/data.service';
import { AppsOverlayService } from '../../../../services/apps-overlay/apps-overlay.service';
import { AppData } from '../../../../models/app-data';

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
		private appsOverlayService: AppsOverlayService,
	) { }

	ngOnInit() {
	}

	drop() {
		var oldIndex: number;
		this.appsOverlayService.apps.map( (data, index) => {
			if (data.branch === this.dataService.appBeingDraggedCurrentlyInAppsOverlay) oldIndex = index;
		})

		var newApp = this.appsOverlayService.apps[oldIndex]


		this.appsOverlayService.apps.splice(oldIndex, 1);
		this.appsOverlayService.apps.splice(this.indexData - (oldIndex < this.indexData ? 1 : 0 ), 0, newApp)

		this.dataService.appBeingDraggedCurrentlyInAppsOverlay = undefined;
		
		new Audio("../../../../../assets/sound/achievement_unlocked.mp3").play();

		this.appsOverlayService.subData();
	}

}
