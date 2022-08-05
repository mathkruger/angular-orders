import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { statusDefaultColors } from '../../components/status/status-color-configuration';
import { Order } from '../../models/order';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private titleService: Title
  ) { }

  order: Order | undefined = undefined;
  statusColors = statusDefaultColors;

  ngOnInit() {
    this.order = this.route.snapshot.data.order;
    this.titleService.setTitle(`Order #${this.order?.orderNumber}`);
    this.checkProductsStock();
  }

  checkProductsStock() {
    if (this.order?.items && this.order.items.length > 0) {
      this.order.items.forEach(item => {
        this.inventoryService.isProductInStock().subscribe(isInStock => {
          item.product.isInStock = isInStock;
        });
      });
    }
  }
}
