import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { OrderService } from '../order.service';

@Injectable({ providedIn: 'root' })
export class OrderResolverService implements Resolve<Order | undefined> {
  
  constructor(private service: OrderService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Order | undefined> | Promise<Order | undefined> | Order {
    const id = route.params.id;
    return this.service.getOrder(parseInt(id));
  }
}