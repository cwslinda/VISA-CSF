import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraService } from '../service/camera.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{


  complainForm!: FormGroup
  imageData = ""
  blob!: Blob

  constructor(private router: Router, public cameraSvc: CameraService, private fb: FormBuilder){}

  ngOnInit(): void {
    if(!this.cameraSvc.imageData){
      this.router.navigate(['/'])
      return
    }
    this.imageData = this.cameraSvc.imageData
    this.complainForm = this.fb.group({
      title: this.fb.control<string>(''), 
      complain: this.fb.control<string>('')
    })
    this.blob = this.dataURItoBlob(this.imageData)
    console.log(">>> blob:", this.blob)
  }

  upload(){
    const value = this.complainForm.value
    console.log('value', value)
    this.cameraSvc.upload(value, this.blob)
      .then(result => {
        this.router.navigate(['/'])
      })
      .catch(err => {
        console.error('>>> error', err)
      })
  }

  dataURItoBlob(dataURI: string){
    var byteString = atob(dataURI.split(',')[1])

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];


    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], {type: mimeString});


  }
}
