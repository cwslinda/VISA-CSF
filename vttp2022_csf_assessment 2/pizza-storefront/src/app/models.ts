// Add your models here if you have any

export interface PizzaOrder{
    name: string
    email: string
    size: number
    thickCrust: boolean
    sauce: string
    toppings: string[]
    comments: string
}


export interface OrderSummaries{
    email:string
    orderId: string
    name:string
    cost: number 
}