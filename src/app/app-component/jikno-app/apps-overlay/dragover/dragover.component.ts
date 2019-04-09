import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dragover',
	templateUrl: './dragover.component.html',
	styleUrls: ['./dragover.component.sass']
})
export class DragoverComponent implements OnInit {

	removed = true;

	constructor() { }

	ngOnInit() {
	}

	drop() {
		alert('droped');
	}

}
