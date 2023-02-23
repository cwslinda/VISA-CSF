import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaOrder } from '../models';
import { PizzaService } from '../pizza.service';

const SIZES: string[] = [
  "Personal - 6 inches",
  "Regular - 9 inches",
  "Large - 12 inches",
  "Extra Large - 15 inches"
]

const PizzaToppings: string[] = [
    'chicken', 'seafood', 'beef', 'vegetables',
    'cheese', 'arugula', 'pineapple'
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pizzaSize = SIZES[0]
  form!: FormGroup
  toppingsArr!: FormArray

  constructor(private fb: FormBuilder, private svc: PizzaService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.createForm()
  }
  processForm(){
    const pizzaOrder = this.form.value as PizzaOrder
    if (this.form.value['base'] == 'thick') pizzaOrder.thickCrust = true 
    else pizzaOrder.thickCrust = false

   console.log(pizzaOrder)

   this.svc.createOrder(pizzaOrder)
    .then(result => {
      console.log("order status:", result)
      this.router.navigate([`/orders/${pizzaOrder.email}`])
    }).catch(error => {
      console.log(error)
    })
   
  }
  updateSize(size: string) {
    this.pizzaSize = SIZES[parseInt(size)]
  }
  
  listOrders(){
    this.router.navigate([`/orders/${this.form.get("email")?.value}`])
  }

  onCheckboxChange(event: {target: {checked: any; value: any}}){
    const formArray = this.form.get("toppings") as FormArray

    if(event.target.checked){
      formArray.push(new FormControl(event.target.value))
    }
  }


  createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>("", [Validators.required]),
      email: this.fb.control<string>("", [Validators.required, Validators.email]),
      size: this.fb.control<number>(0, [Validators.required]),
      base: this.fb.control<string>("", [Validators.required]),
      sauce: this.fb.control<string>("", [Validators.required]),
      toppings: this.fb.array([]),
      comments: this.fb.control<string>("")

    })
  }
}
