import { UserCart } from './user-cart';

export class OrderItem {
  userName: String;
  address: String;
  orderId: number;
  cartItem: UserCart[];
  amount: number;
}
