import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

//Services
import { DataService } from '../service/data/data.service';

@NgModule({
	imports: [],
	declarations: [],
	exports: []
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) throw new Error("A instance of CoreModule already exists!  Only import CoreModule into the app.module.");
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				DataService
			]
		}
	}
}