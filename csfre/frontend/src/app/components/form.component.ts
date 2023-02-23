import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item, PostingResult } from '../models/models';
import { ItemService } from '../service/item.service';
import { SharingService } from '../service/sharing.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 

  itemForm!: FormGroup
  itemDetails!: Item
  postingResult!: PostingResult
  @ViewChild("image") image!:ElementRef

  constructor(private fb: FormBuilder, private svc: ItemService, private router: Router, private shareSvc: SharingService){}

  ngOnInit(): void {
    this.itemForm = this.createForm()
  }

  processForm(){
   this.itemDetails = this.itemForm.value as Item
    console.log(this.itemDetails) 

    this.svc.postItems(this.itemDetails, this.image.nativeElement.files[0])
    .then(result => {
      this.postingResult = result

      this.shareSvc.sharingValue = this.postingResult;
      this.router.navigate([`/post/${this.postingResult.postingId}`])

      console.log(result)
    })
    .catch(err => {
      console.error('>>> error', err)
    })
  }

  clearForm(){
    console.log("clearing form")
    this.ngOnInit();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>("", [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>("", [Validators.required, Validators.maxLength(128)]),
      phone: this.fb.control<number>, 
      title: this.fb.control<string>("", [Validators.required, Validators.minLength(5), Validators.maxLength(128)]),
      description: this.fb.control<string>("", [Validators.required]),
      image: this.fb.control<File>
    })

  }





}
