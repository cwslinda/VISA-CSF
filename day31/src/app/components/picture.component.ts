import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { MyImage } from '../model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  @Input()
  imageUrl = "/assets/polarbear.jpeg"

  @Input()
  width = 10

  @Output()
  onClicked = new Subject<MyImage>()
  
  
  
  counter = 10
  
  imageClicked(){
    // console.info("image clicked", this.imageUrl)
    // this.width ++

    const img: MyImage = {
      imageName: this.imageUrl,
      size: this.width
    }

    this.onClicked.next(img)

  }

  resize(factor: number){
    this.width = this.width + factor
  }
  
  increment(){
    this.width++
  }

  decrement(){
    this.width--
  }

}
