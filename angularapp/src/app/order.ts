import { UserCart } from './user-cart';
export class Order {
    userId:String;
    cartItem: UserCart[];
    amount:number;
}
