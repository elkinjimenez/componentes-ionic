import { Component, OnInit } from '@angular/core';
import { Componente, ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[];

  constructor(
    private servicio: ServiciosService
  ) { }

  ngOnInit() {
    this.componentes = this.servicio.getListaMenu();
  }

}