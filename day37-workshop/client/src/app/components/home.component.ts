import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 

  form!: FormGroup
  @ViewChild('file') picture!:ElementRef


  constructor(private fb:FormBuilder, private router: Router, private svc: PostService){}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  postToFeed(){
    console.log("comments > ", this.form.value['comments'])
    console.log("pic blob > ", this.picture.nativeElement.files[0])

    const formData = new FormData()
    formData.set("comments", this.form.value['comments'])
    formData.set("picture", this.picture.nativeElement.files[0])


    this.svc.postToFeed(formData).then(result => {
      console.log("test")
    })

  }

  private createForm(): FormGroup{
    return this.fb.group({
      comments: this.fb.control<string>(''),
      picture: this.fb.control('')
    })
  }

}
