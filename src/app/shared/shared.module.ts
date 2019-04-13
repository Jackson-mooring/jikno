import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component'
import { NgxPopperModule } from 'ngx-popper';

@NgModule({
	declarations: [
		IconComponent,
	],
	imports: [
		CommonModule,
		NgxPopperModule,
	],
	exports: [
		IconComponent,
		NgxPopperModule,
	]
})
export class SharedModule { }
