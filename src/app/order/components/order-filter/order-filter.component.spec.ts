import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFilterComponent } from './order-filter.component';
import { OrdersMock } from '../../mocks/orders.mock';
import { OrderStatusEnum } from '../../models/enums/order-status-enum';

describe('OrderFilterComponent', () => {
  let component: OrderFilterComponent;
  let fixture: ComponentFixture<OrderFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should returned all data based on the typed term', () => {
    component.data = OrdersMock;
    component.term = '1';
    const emitterSpy = spyOn(component.searchResult, 'emit');

    component.search();
    expect(emitterSpy).toHaveBeenCalledWith(OrdersMock.map(x => {
      x.show = x.orderNumber === 1;
      return x;
    }));

    component.term = 'Submitted';
    component.search();
    expect(emitterSpy).toHaveBeenCalledWith(OrdersMock.map(x => {
      x.show = x.status === OrderStatusEnum.SUBMITTED;
      return x;
    }));
  });
});
