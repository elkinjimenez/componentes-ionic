import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popview',
  templateUrl: './popview.component.html',
  styleUrls: ['./popview.component.scss'],
})
export class PopviewComponent implements OnInit {

  constructor(
    private popviewControler: PopoverController,
  ) { }

  ngOnInit() { }

  closePop() {
    this.popviewControler.dismiss();
  }

}
