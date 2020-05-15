import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      nombre: 'Avatar',
      url: '/avatar'
    },
    {
      nombre: 'Alerta',
      url: '/alert'
    },
    {
      nombre: 'Lista por hacer',
      url: '/lista'
    },
    {
      nombre: 'Action sheet',
      url: '/action-sheet'
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
      nombre: 'Tarjetas',
      url: '/card'
    },
    {
      nombre: 'Checkbox',
      url: '/checkbox'
    }
  ]

  constructor() { }

  ngOnInit() { }

}


interface Componente {
  nombre: string;
  url: string;
}