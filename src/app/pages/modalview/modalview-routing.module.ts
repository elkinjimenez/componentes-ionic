import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalviewPage } from './modalview.page';

const routes: Routes = [
  {
    path: '',
    component: ModalviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalviewPageRoutingModule {}
