import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
