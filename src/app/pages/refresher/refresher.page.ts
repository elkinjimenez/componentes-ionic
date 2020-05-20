import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  data = Array(2);

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      const newA = Array(1);
      this.data.push(...newA);
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

}
