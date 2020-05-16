import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  customYearValues = [2020, 2016, 2000, 1996];
  fechaNacimiento: Date = new Date();
  customPickerOptions: any;

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar fecha',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'No salir',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  ngOnInit() {
    console.log(this.fechaNacimiento);
  }

  cambioFecha() {
    console.log(this.fechaNacimiento);
  }

}
