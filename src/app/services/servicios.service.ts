import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  componentes: Componente[] = [
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
    },
    {
      nombre: 'Chip',
      url: '/chip'
    },
    {
      nombre: 'Fecha',
      url: '/datetime'
    },
    {
      nombre: 'Botón flotante',
      url: '/fab'
    },
    {
      nombre: 'Sistema de grillas',
      url: '/grid'
    },
    {
      nombre: 'Scroll infinito',
      url: '/infinite'
    },
    {
      nombre: 'Campos - digitar',
      url: '/input'
    },
    {
      nombre: 'Listas',
      url: '/list'
    },
    {
      nombre: 'Notas',
      url: '/note'
    },
    {
      nombre: 'Modal',
      url: '/modal'
    },
    {
      nombre: 'Loading',
      url: '/loading'
    },
    {
      nombre: 'Progress bar',
      url: '/progressbar'
    },
    {
      nombre: 'Selecciona uno',
      url: '/radio'
    },
    {
      nombre: 'Rango',
      url: '/range'
    },
    {
      nombre: 'Refrescar',
      url: '/refresher'
    }
  ]

  constructor() { }

  getListaMenu(): Componente[] {
    return this.componentes;
  }
}

export interface Componente {
  nombre: string;
  url: string;
}