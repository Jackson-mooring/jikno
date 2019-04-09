import { Injectable } from '@angular/core';

import { AppData } from '../../model/app-data';

@Injectable({
	providedIn: 'root'
})
export class AppsOverlayService {

	constructor() { }

	apps: AppData[] = [
		{
			branch: "example_app",
			route: '/example_app',
			name: "Example App",
			icon: "../../../../assets/logo-200.png",
			active_by_user: true,
			popularity: 0.5,
			description: "This is an example app",
			keyWords: [ 'example', 'app' ],
		},
		{
			branch: "fake_software",
			route: '/fake_software',
			name: "Fake Software",
			icon: "../../../../assets/logo-200.png",
			active_by_user: true,
			popularity: 0.5,
			description: 'This is a fake software',
			keyWords: [ 'fake', 'software', 'joke' ],
		},
		{
			branch: "done",
			route: '/done',
			name: "Done",
			icon: "../../../../assets/logo-200.png",
			active_by_user: true,
			popularity: 0.5,
			description: 'This is a fake software',
			keyWords: [ 'fake', 'software', 'joke' ],
		},
		{
			branch: "counter",
			route: '/counter',
			name: "Counter",
			icon: "../../../../assets/logo-200.png",
			active_by_user: true,
			popularity: 0.5,
			description: 'This is a fake software',
			keyWords: [ 'fake', 'software', 'joke' ],
		},
		{
			branch: "search",
			route: '/search',
			name: "Search",
			icon: "../../../../assets/logo-200.png",
			active_by_user: true,
			popularity: 0.5,
			description: 'This is a fake software',
			keyWords: [ 'fake', 'software', 'joke' ],
		}
	]

}
