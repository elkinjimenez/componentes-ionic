import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [HeaderComponent, AvatarComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent,
    AvatarComponent
  ]
})
export class ComponentsModule { }