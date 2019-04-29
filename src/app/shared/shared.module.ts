import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { NgxPopperModule } from 'ngx-popper';
import { AvatarComponent } from '../avatar/component/avatar.component';
import { StickScrollBarComponent } from '../stick-scroll-bar/stick-scroll-bar.component';

@NgModule({
	declarations: [
		IconComponent,
		AvatarComponent,
		StickScrollBarComponent,
	],
	imports: [
		CommonModule,
		NgxPopperModule,
	],
	exports: [
		IconComponent,
		NgxPopperModule,
		AvatarComponent,
		StickScrollBarComponent,
	]
})
export class SharedModule { }
