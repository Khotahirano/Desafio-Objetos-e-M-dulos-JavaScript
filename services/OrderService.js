import * as ShService from './ShippingService.js'

export function total(order){

const frete = ShService.order(order.Order);

const discountPrice = order.basic - order.discount;
    
return discountPrice + frete; 
}

