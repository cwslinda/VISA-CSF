import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORIES } from '../constant';
import { Inventory, Item } from '../models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {



  @Input()
  cart = new Map<String, Number>()

  @Output() 
  onRemove = new Subject<Item>()


  delete(description: String){
    console.log(`in cart > ${description}`)
    const item = {
      description
    } as Item
    this.onRemove.next(item)
    }
  }





