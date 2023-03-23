import * as OrderService from "../models/services/OrderService";
import Order from "./models/Order.js"; 

const data = document.getElementById("result").innerHTML.split("\n");

const order = new Order(data[0],Number(data[1]),Number(data[2])); 

const total = OrderService.total(order);

console.log(`Pedido código = ${Order.code}`);
console.log(`Valor total = ${total.toFixed(2)}`);