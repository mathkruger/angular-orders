import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { OrdersMock } from '../mocks/orders.mock';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders = OrdersMock;

  listOrders() {
    return of(this.orders);
  }

  getOrder(orderNumber: number) {
    const order = this.orders.find(x => x.orderNumber === orderNumber);
    return of(order);
  }
}
