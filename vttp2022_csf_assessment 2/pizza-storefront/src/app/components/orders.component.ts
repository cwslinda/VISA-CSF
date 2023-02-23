import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderSummaries, PizzaOrder } from '../models';
import { PizzaService } from '../pizza.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{


  orders: OrderSummaries[] = []
  param$!: Subscription
  email!: string
  count!: number

  constructor(private ar: ActivatedRoute, private svc: PizzaService) { }
  
  
  ngOnInit(): void {
    this.param$ = this.ar.params.subscribe(
      (params) => {
        this.email = params["email"]

        this.svc.getOrders(this.email)
          .then(result => {
            this.count = result["count"]
            console.log("count >", this.count)

            this.orders = result['orderSummaries']
            console.log(this.orders)
          }).catch(error => {
            this.count = 0
            console.log("error >", error)
          })
      }
    )
  }

}
