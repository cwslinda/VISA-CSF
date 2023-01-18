import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { UserDetails } from '../models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  
  @Output()
  onUserDetail = new Subject<UserDetails>()
  
  form!:FormGroup

  constructor(private fb: FormBuilder){
  }
  
  ngOnInit(): void {
    this.form = this.createForm();
  }

  getFormValue(): UserDetails {
    return this.form.value as UserDetails
  }

  processForm(){
    const userDetails: UserDetails = this.form.value as UserDetails
    console.log("form >>> ", userDetails)
    this.onUserDetail.next(userDetails)
    this.form = this.createForm()

  }
  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.required, Validators.email]),
      comments: this.fb.control("", [Validators.required])
    })
  }
}
