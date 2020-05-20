import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopviewComponent } from '../popview/popview.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  constructor(
    private popoverControler: PopoverController,
  ) { }

  ngOnInit() { }

  async showPopover(event: any) {
    const popover = await this.popoverControler.create(
      {
        component: PopviewComponent,
        // mode: 'ios',
        event,
        translucent: true,
      }
    );
    await popover.present();
  }

}
