import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../model/model';
import { PostService } from '../service/post.service';
import { Buffer } from 'buffer';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {


  postForm!: FormGroup
  
  post!: Post 
  posts: Post[] = []
  imageData = ""
  blob!: Blob


  constructor(private router: Router, private fb: FormBuilder, public postSvc: PostService){}
     
  ngOnInit(): void {
  
    this.postForm = this.fb.group({
      title: this.fb.control<string>(''), 
      text: this.fb.control<string>(''),
      image: this.fb.control<Blob>
    })

    // this.blob = this.dataURItoBlob(this.imageData)
    // console.log(">>> blob:", this.blob)
 }

 upload(){
  const value = this.postForm.value
  console.log('value', value)
  console.log('image', this.postForm.value['image'])
  this.postSvc.upload(value)
    .then(result => {
      this.router.navigate(['/'])
    })
    .catch(err => {
      console.error('>>> error', err)
    })
}

//   dataURItoBlob(dataURI: string){
//   var byteString =  Buffer.from(dataURI.split(',')[1]).toString('base64')
  
//   var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];


//   var ab = new ArrayBuffer(byteString.length);
//   var ia = new Uint8Array(ab);
//   for (var i = 0; i < byteString.length; i++) {
//       ia[i] = byteString.charCodeAt(i);
// }

// return new Blob([ab], {type: mimeString});


// }


}
