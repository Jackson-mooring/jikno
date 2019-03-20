import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './apps/home/home.module';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app-component/app.component';
import { JiknoAppComponent } from './app-component/jikno-app/jikno-app.component';

@NgModule({
  declarations: [
    AppComponent,
    JiknoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
