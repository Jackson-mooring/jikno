import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent implements OnInit {

	@Input() avatarSize: number;
	@Input() avatarClick = () => {console.log("Clicked on avatar")};
	@Input() shouldBounce = false;
	@Input() isCircle = true;
	@Input() showShadow = true;

	image = '';
	color = 'green';
	letter = '';

	constructor() { }

	ngOnInit() {
	}

}
