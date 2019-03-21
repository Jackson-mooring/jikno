import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [MainComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LoginSignupModule { }
