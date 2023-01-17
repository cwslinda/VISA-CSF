import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  form!: FormGroup
  lineItems!: FormArray

  // define the variable 
  // fb: FormBuilder

  // dependencies injection 
  // through adding in private, we do not have to define the variable
  constructor(private fb: FormBuilder){
    // this.fb = fb
  
  }

  ngOnInit(): void {
    // Build the form 
    this.form = this.createForm()

  }

  process(){
    const order: Order = this.form.value as Order
    console.log(">>>> form" , order)
  }

  clearForm(){
    //this.form.reset()
    this.form = this.createForm()

  }
  public addItems(){
    this.lineItems.push(this.createLineItems())
  }

  public deleteItems(i: number){
    this.lineItems.removeAt(i)
  }

  private createForm(): FormGroup{
    this.lineItems = this.fb.array([])

    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      rush: this.fb.control<boolean>(false),
      lineItems: this.lineItems
    })
  }

  private createLineItems(): FormGroup{ 
    return this.fb.group({
      item: this.fb.control<string>("", [Validators.required]),
      quantity: this.fb.control<number>(1, [Validators.required, Validators.min(1), Validators.max(100)])
    })
  }

}
