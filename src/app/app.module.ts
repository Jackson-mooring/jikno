import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './apps/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSidebarModule } from './app-component/jikno-app/sidebar/custom-sidebar.module';
import { HabitsModule } from './apps/habits/habits.module'
import { LoginSignupModule } from './login-signup/login-signup.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app-component/app.component';
import { JiknoAppComponent } from './app-component/jikno-app/jikno-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppsOverlayComponent } from './app-component/jikno-app/apps-overlay/apps-overlay.component';
import { AppDetailComponent } from './app-component/jikno-app/apps-overlay/app-detail/app-detail.component';
import { DragoverComponent } from './app-component/jikno-app/apps-overlay/dragover/dragover.component';

@NgModule({
	declarations: [
		AppComponent,
		JiknoAppComponent,
		NotFoundComponent,
		AppsOverlayComponent,
		AppDetailComponent,
		DragoverComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HomeModule,
		BrowserAnimationsModule,
		CustomSidebarModule,
		HabitsModule,
		LoginSignupModule,
		SharedModule,
		CoreModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
