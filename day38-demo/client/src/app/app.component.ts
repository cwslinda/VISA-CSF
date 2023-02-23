import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'day38-demo';

  form!: FormGroup


  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control(""),
      email:this.fb.control("")
    })  
  }

  addContact(){
    const contact = this.form.value as Contact
    console.info(">>>> contact", contact)
    this.contactRepo.addContact(contact)
  }
}
