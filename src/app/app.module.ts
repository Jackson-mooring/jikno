import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './apps/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSidebarModule } from './app-component/jikno-app/sidebar/custom-sidebar.module';
import { HabitsModule } from './apps/habits/habits.module'
import { LoginSignupModule } from './login-signup/login-signup.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotiModule } from './notifications/noti.module';
import { AccountModule } from './account/account.module';
import { TasksModule } from './apps/tasks/tasks.module';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app-component/app.component';
import { JiknoAppComponent } from './app-component/jikno-app/jikno-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { AppsOverlayComponent } from './app-component/jikno-app/apps-overlay/apps-overlay.component';
import { AppDetailComponent } from './app-component/jikno-app/apps-overlay/app-detail/app-detail.component';
import { DragoverComponent } from './app-component/jikno-app/apps-overlay/dragover/dragover.component';
import { AlertComponent } from './alert/component/alert.component';
import { NoSpacesPipe } from './pipes/no-spaces/no-spaces.pipe';
import { TasksSingleComponent } from './tasks-single/tasks-single.component';

@NgModule({
	declarations: [
		AppComponent,
		JiknoAppComponent,
		NotFoundComponent,
		AppsOverlayComponent,
		AppDetailComponent,
		DragoverComponent,
		AlertComponent,
		NoSpacesPipe,
		TasksSingleComponent,
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
		ForgotPasswordModule,
		HttpClientModule,
		FormsModule,
		NotiModule,
		AccountModule,
		TasksModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
