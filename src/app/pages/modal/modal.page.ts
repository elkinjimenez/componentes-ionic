import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalviewPage } from '../modalview/modalview.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private modalControl: ModalController,
  ) { }

  ngOnInit() { }

  async showModal() {
    const modal = await this.modalControl.create(
      {
        component: ModalviewPage,
        componentProps: {
          mensaje: 'Es un mensaje de emergencia...'
        }
      }
    );
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

}
