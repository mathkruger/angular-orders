import { Component, Input } from '@angular/core';
import { OrderStatusEnum, orderStatusTitles } from '../../models/enums/order-status-enum';
import { StatusColorConfiguration } from './status-color-configuration';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  @Input() colors: StatusColorConfiguration[] = [];
  @Input() status: OrderStatusEnum | undefined = undefined;

  getStatusColor() {
    return this.colors.find(x => x.status === this.status)?.color;
  }

  getStatusLabelColor() {
    return this.colors.find(x => x.status === this.status)?.labelColor;
  }

  getStatusTitle() {
    return orderStatusTitles[this.status ?? 0];
  }
}
