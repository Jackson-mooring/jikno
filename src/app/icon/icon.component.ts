import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.sass']
})
export class IconComponent implements OnInit {
	@Input() iconName: string;
	@Input() isButton: boolean;
	@Input() shouldSpin: boolean;
	@Input() iconSize: number | string;

	constructor() {
		this.iconSize = Number(this.iconSize);
	}

	ngOnInit() {
	}

}
