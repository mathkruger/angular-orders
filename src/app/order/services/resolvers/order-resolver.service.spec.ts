import { TestBed, inject } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { OrdersMock } from '../../mocks/orders.mock';
import { OrderService } from '../order.service';
import { OrderResolverService } from './order-resolver.service';

describe('Service: OrderResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderResolverService]
    });
  });

  it('should call the order service to search for the requested order', inject([OrderResolverService], (service: OrderResolverService) => {
    const orderService = TestBed.inject(OrderService);
    const spyOnOrderService = spyOn(orderService, 'getOrder').and.returnValue(of(OrdersMock[0]));
    const route = new ActivatedRouteSnapshot();
    route.params = {
      id: 1
    };
    service.resolve(route);

    expect(service).toBeTruthy();
    expect(spyOnOrderService).toHaveBeenCalledWith(1);
  }));
});
