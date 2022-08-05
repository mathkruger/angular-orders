import { Component, EventEmitter, Input, Output } from '@angular/core';
import { orderStatusTitles } from '../../models/enums/order-status-enum';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.css']
})
export class OrderFilterComponent {

  constructor() { }

  @Input() data: Order[] = [];
  @Output() searchResult = new EventEmitter<Order[]>();

  term: string = '';

  search() {
    const results = this.data.map(x => {
      if (this.term.length > 0) {
        x.show = x.orderNumber == parseInt(this.term) ||
        orderStatusTitles[x.status].toLowerCase().includes(this.term.toLowerCase());
      }
      else {
        x.show = true;
      }

      return x;
    });

    this.searchResult.emit(results);
  }
}
