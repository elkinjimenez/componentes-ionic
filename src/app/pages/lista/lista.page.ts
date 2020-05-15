import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  colores: any = ['primary', 'danger', 'secondary', 'dark', 'success'];

  public form = [
    { val: 'Comprar leche', isChecked: false, color: 'success' },
    { val: 'Sacar el perro', isChecked: false, color: 'primary' },
    // { val: 'Poner la lavadora', isChecked: false, color: 'secondary' },
    // { val: 'Iniciar reunión Teams', isChecked: false, color: 'light' },
    // { val: 'Trabajar en el servicio REST', isChecked: false, color: 'danger' },
    // { val: 'Preparar almuerzo', isChecked: false, color: 'dark' },
    // { val: 'Trabajar en frontend', isChecked: false, color: 'tertiary' },
    // { val: 'Poner la alarma', isChecked: false, color: 'primary' },
  ];

  constructor(
    public alertController: AlertController,
  ) { }

  ngOnInit() { }

  async input() {
    const alert = await this.alertController.create({
      header: 'Nueva tarea',
      message: 'Digita la tarea <strong>aquí!</strong>',
      inputs: [
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Nueva tarea'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Crear',
          handler: data => {
            console.log('Confirm Okay: ' + data.name2);
            const pos = Math.floor(Math.random() * 5);
            this.form.push({
              color: this.colores[pos],
              isChecked: false,
              val: data.name2
            })
          }
        }
      ]
    });
    await alert.present();
  }

}
