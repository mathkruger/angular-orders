import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponentsModule } from './components/components.module';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    OrderComponentsModule
  ],
  declarations: [
    OrdersComponent,
    OrderDetailsComponent
  ]
})
export class OrderModule { }
