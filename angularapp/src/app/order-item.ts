import { UserCart } from './user-cart';

export class OrderItem {
    orderId:number;
    cartItem:UserCart[];
    amount:number;
}
