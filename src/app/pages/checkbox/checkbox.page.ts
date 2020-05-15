import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public form = [
    { val: 'Comprar leche', isChecked: true, color: 'success' },
    { val: 'Sacar el perro', isChecked: false, color: 'primary' },
    { val: 'Poner la lavadora', isChecked: false, color: 'secondary' },
    { val: 'Iniciar reunión Teams', isChecked: false, color: 'light' },
    { val: 'Trabajar en el servicio REST', isChecked: false, color: 'danger' },
    { val: 'Preparar almuerzo', isChecked: false, color: 'dark' },
    { val: 'Trabajar en frontend', isChecked: false, color: 'tertiary' },
    { val: 'Poner la alarma', isChecked: false, color: 'primary' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
