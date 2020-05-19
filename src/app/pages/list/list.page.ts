import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('myList') lista: IonList;

  constructor() { }

  ngOnInit() { }

  buttonClick() {
    console.log('Usted hizo click en el item de boton');
  }

  favorite() {
    this.lista.closeSlidingItems();
  }

  share() { }

  unread() { }
}
