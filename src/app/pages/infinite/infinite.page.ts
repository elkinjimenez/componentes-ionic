import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = Array(20);

  constructor() { }

  ngOnInit() { }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      const newA = Array(30);
      this.data.push(...newA);
      event.target.complete();
      if (this.data.length >= 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
