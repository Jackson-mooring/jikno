import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component'
import { NgxPopperModule } from 'ngx-popper';
import { AvatarComponent } from '../avatar/component/avatar.component';

@NgModule({
	declarations: [
		IconComponent,
		AvatarComponent,
	],
	imports: [
		CommonModule,
		NgxPopperModule,
	],
	exports: [
		IconComponent,
		NgxPopperModule,
		AvatarComponent,
	]
})
export class SharedModule { }
