import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderResolverService } from './services/resolvers/order-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
  {
    path: 'details/:id',
    component: OrderDetailsComponent,
    resolve: {
      order: OrderResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }