import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  grid: any = [3, 4, 5, 6,6, 7,5, 8,4, 9,3, 10,2, 11,1, 12];

  constructor() { }

  ngOnInit() {
  }

}
