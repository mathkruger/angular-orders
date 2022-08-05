import { Component, Input } from '@angular/core';
import { OrderItem } from '../../models/order-item';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input() item: OrderItem | undefined;
  isCollapsed = true;
}
