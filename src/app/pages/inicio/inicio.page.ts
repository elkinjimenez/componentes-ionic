import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      nombre: 'Alerta',
      url: '/alert'
    },
    {
      nombre: 'Action sheet',
      url: '/action-sheet'
    },
    {
      nombre: 'Avatar',
      url: '/avatar'
    },
    {
      nombre: 'Badges',
      url: '/badge'
    },
    {
      nombre: 'Botones',
      url: '/button'
    },
    {
      nombre: 'tarjetas',
      url: '/card'
    }
  ]

  constructor() { }

  ngOnInit() { }

}


interface Componente {
  nombre: string;
  url: string;
}