import * as shippment from './ShippingService.js'

export function total(order){

const discountPrice = order.basic(order.Order) - order.discount(order.Order);
    
const frete = shippment.order(order.Order);
 
return discountPrice + frete; 


}

