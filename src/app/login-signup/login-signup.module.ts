import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        MainComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class LoginSignupModule { }
