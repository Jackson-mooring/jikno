import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './apps/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app-component/app.component';
import { JiknoAppComponent } from './app-component/jikno-app/jikno-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IconComponent } from './icon/icon.component';
import { SidebarComponent } from './app-component/jikno-app/sidebar/sidebar-component/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    JiknoAppComponent,
    NotFoundComponent,
    IconComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
