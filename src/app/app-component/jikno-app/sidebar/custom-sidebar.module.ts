import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSidebarComponentsAndPaths } from './custom-sidebar';

const declarations = [];
CustomSidebarComponentsAndPaths.map(route => {
	declarations.push(route.component);
})

@NgModule({
	declarations: declarations,
	imports: [
		CommonModule
	]
})
export class CustomSidebarModule { }
