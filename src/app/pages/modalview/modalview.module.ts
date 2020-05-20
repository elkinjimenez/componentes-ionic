import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalviewPageRoutingModule } from './modalview-routing.module';

import { ModalviewPage } from './modalview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalviewPageRoutingModule
  ],
  declarations: [ModalviewPage]
})
export class ModalviewPageModule {}
