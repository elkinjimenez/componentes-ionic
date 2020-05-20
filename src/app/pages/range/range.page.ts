import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {

  rangos: any = { uno: 70, dos: 20, tres: 1100, cua: 1200, cin: 24 };


  constructor() { }

  ngOnInit() {
  }

}
