import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private loadingControl: LoadingController
  ) { }

  ngOnInit() {
  }

  async showLoading() {
    const loading = await this.loadingControl.create(
      {
        message: 'Cargando',
        // duration: 2000,
        spinner: 'crescent',
      }
    );
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 10000);
  }

}
