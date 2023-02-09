import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { CameraService } from './service/camera.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day37-demo';



  width = 400
  height = 400

  pics: string[] = []

  constructor(private router: Router, private cameraSvc: CameraService){}

  trigger = new Subject<void>
  

  snap(){
    this.trigger.next()
  }


  snapshot(img: WebcamImage){
    console.info('imgAsBase64:', img.imageAsBase64)
    console.info('imgAsDataUrl:', img.imageAsDataUrl)
    console.info('imgData:', img.imageData)


    this.cameraSvc.imageData = img.imageAsDataUrl

    this.router.navigate(['/upload'])


  }
}
