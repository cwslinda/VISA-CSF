import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { CameraService } from '../service/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent{


  trigger = new Subject<void>()

  pics: string[] = []

  constructor(private router: Router, private cameraSvc: CameraService) { }

  width = 400
  height = 400
  
  snap() {
    this.trigger.next()
  }

  snapshot(img: WebcamImage) {
    console.info('imgAsBase64: ', img.imageAsBase64)
    console.info('imgAsDataUrl: ', img.imageAsDataUrl)
    console.info('imgData: ', img.imageData)

    this.cameraSvc.imageData = img.imageAsDataUrl
    //this.pics.push(img.imageAsDataUrl)

    this.router.navigate(['/upload'])
  }

}
