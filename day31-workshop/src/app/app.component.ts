import { Component, Output } from '@angular/core';
import { Inventory, Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output()
  cart = new Map<string, number>()

add(item: Item){
  if(this.cart.has(item.description)){
    const quantity = this.cart.get(item.description) as number
    this.cart.set(item.description, quantity+1)
  } else {
    this.cart.set(item.description, 1)
  }
  
  console.log(`added > ${item.description}, ${this.cart.get(item.description)}`)
}

delete(item: Item){
  console.log(`item to delete > ${item.description}`)

  const quantity = this.cart.get(item.description)

  if (quantity == 1) {
      this.cart.delete(item.description)
    } else {
      const quantity = this.cart.get(item.description) as number
      this.cart.set(item.description, quantity-1)
    }
}


}
