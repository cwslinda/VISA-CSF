import { Component } from '@angular/core';
import { MyImage } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image = "/assets/polarbearcub.jpeg"
  imageWidth = 20

  polarBearImages = [
    "/assets/polarbearcub.jpeg",
    "/assets/polarbear.jpeg",

  ]

  imageClicked(data: MyImage) {
    console.info(`image clicked:`, data)
  }
}
