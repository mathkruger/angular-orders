/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { OrderDetailsComponent } from './order-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { OrdersMock } from '../../mocks/orders.mock';
import { InventoryService } from '../../services/inventory.service';
import { of } from 'rxjs';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const route = TestBed.inject(ActivatedRoute);
    const titleService = TestBed.inject(Title);
    const spyOnTitle = spyOn(titleService, 'setTitle');
    const spyOnCheckProductStock = spyOn(component, 'checkProductsStock');

    route.snapshot.data = {
      order: OrdersMock[0]
    };

    component.ngOnInit();

    expect(component).toBeTruthy();
    expect(component.order).toEqual(OrdersMock[0]);
    expect(spyOnTitle).toHaveBeenCalledWith(`Order #${component.order?.orderNumber}`);
    expect(spyOnCheckProductStock).toHaveBeenCalled();
  });

  it('should check if the returned products has stock', () => {
    const inventoryService = TestBed.inject(InventoryService);
    const spyOnInventory = spyOn(inventoryService, 'isProductInStock').and.returnValue(
      of(true)
    );
    component.order = OrdersMock[0];

    component.checkProductsStock();
    expect(spyOnInventory).toHaveBeenCalledTimes(OrdersMock[0].items.length);
  });
});
