import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { StatusComponent } from './status/status.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderFilterComponent } from './order-filter/order-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    GridComponent,
    StatusComponent,
    OrderItemComponent,
    OrderFilterComponent
  ],
  exports: [
    GridComponent,
    StatusComponent,
    OrderItemComponent,
    OrderFilterComponent
  ]
})
export class OrderComponentsModule { }