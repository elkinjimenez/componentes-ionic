import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {
  
  pepperoni = 1;
  sausage = 1;
  mushrooms = 2;

  constructor() { }

  ngOnInit() {
  }

}
