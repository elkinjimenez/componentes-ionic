import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { AvatarComponent } from './avatar/avatar.component';
import { MenuComponent } from './menu/menu.component';
import { InicioPageRoutingModule } from '../pages/inicio/inicio-routing.module';
import { PopviewComponent } from './popview/popview.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AvatarComponent,
    MenuComponent,
    PopviewComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    InicioPageRoutingModule,
  ],
  exports: [
    HeaderComponent,
    AvatarComponent,
    MenuComponent,
    PopviewComponent
  ]
})
export class ComponentsModule { }