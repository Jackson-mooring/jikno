import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { AvatarComponent } from '../avatar/component/avatar.component';

@NgModule({
  declarations: [
      IconComponent,
      AvatarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
	  IconComponent,
	  AvatarComponent,
  ]
})
export class SharedModule { }
