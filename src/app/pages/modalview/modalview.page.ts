import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalview',
  templateUrl: './modalview.page.html',
  styleUrls: ['./modalview.page.scss'],
})
export class ModalviewPage implements OnInit {

  @Input() mensaje: string;

  constructor(
    private modalControler: ModalController
  ) { }

  ngOnInit() { }

  closeModal() {
    this.modalControler.dismiss(
      {
        mensaje: 'Soy nuevo',
      }
    );
  }

}
