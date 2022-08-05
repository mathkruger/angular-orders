import { TestBed } from '@angular/core/testing';
import { OrdersMock } from '../mocks/orders.mock';
import { OrderService } from './order.service';

describe('Service: Order', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService]
    });

    service = TestBed.inject(OrderService);
  });

  it('should return all orders', () => {
    service.orders = OrdersMock;

    service.listOrders().subscribe(items => {
      expect(items).toEqual(OrdersMock);
    })
  });

  it('should return a specific orders', () => {
    service.orders = OrdersMock;

    service.getOrder(2).subscribe(item => {
      expect(item).toEqual(OrdersMock.find(x => x.orderNumber === 2));
    })
  });
});
