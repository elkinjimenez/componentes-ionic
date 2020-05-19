import { Component, OnInit } from '@angular/core';
import { ServiciosService, Componente } from 'src/app/services/servicios.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Componente[];

  constructor(
    private servicio: ServiciosService,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.componentes = this.servicio.getListaMenu();
  }

  cerrarMenu() {
    this.menu.close('primerMenu');
  }

}


