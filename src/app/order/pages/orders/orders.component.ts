import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ColumnType, GridColumn } from '../../components/grid/grid-column';
import { statusDefaultColors } from '../../components/status/status-color-configuration';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements AfterContentInit, OnInit {

  @ViewChild('statusTemplate', { static: true })
  statusTemplate: TemplateRef<any> | undefined = undefined;

  ordersColumns: GridColumn[] = [];

  statusColors = statusDefaultColors;

  orders: Order[] | undefined = [];

  constructor(
    private service: OrderService,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Orders');
    this.listOrders();
  }

  ngAfterContentInit() {
    this.setGridColumns();
  }

  listOrders() {
    this.service.listOrders().subscribe(orders => {
      this.orders = this.sortOrders(orders);
    });
  }

  sortOrders(orders: Order[]) {
    return orders.sort((a, b) => {
      if (a.shipDate && b.shipDate) {
        if (a.shipDate > b.shipDate) return 1;
        if (a.shipDate < b.shipDate) return -1;
        return 0;
      }
      
      return 0;
    });
  }

  setGridColumns() {
    this.ordersColumns = [
      new GridColumn({ fieldName: 'orderNumber', label: '#', type: ColumnType.TEXT }),
      new GridColumn({ fieldName: 'shipDate', label: 'Ship Date', type: ColumnType.DATE }),
      new GridColumn({
        fieldName: 'status',
        label: 'Status',
        type: ColumnType.TEMPLATE,
        template: this.statusTemplate
      }),
    ];
  }

  redirectToDetails(orderNumber: number) {
    this.router.navigate([`/orders/details/${orderNumber}`]);
  }

}
