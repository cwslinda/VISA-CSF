import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'day31fruits';

 
  selected(inventory: string) {
    console.info('>>> app.component selected: ', inventory)
  }


}
