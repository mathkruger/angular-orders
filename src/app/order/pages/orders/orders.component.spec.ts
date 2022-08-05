import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { OrdersComponent } from './orders.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderService } from '../../services/order.service';
import { of } from 'rxjs';
import { OrdersMock } from '../../mocks/orders.mock';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const titleService = TestBed.inject(Title);
    const spyOnTitle = spyOn(titleService, 'setTitle');
    const spyOnListOrders = spyOn(component, 'listOrders');

    component.ngOnInit();
    
    expect(component).toBeTruthy();
    expect(spyOnTitle).toHaveBeenCalledWith('Orders');
    expect(spyOnListOrders).toHaveBeenCalled();
  });

  it('should call the setGridColumns method on ngAfterContentInit', () => {
    const spyOnSetGrid = spyOn(component, 'setGridColumns');
    component.ngAfterContentInit();
    expect(spyOnSetGrid).toHaveBeenCalled();
  });

  it('should call the listOrders method from OrderService', () => {
    const service = TestBed.inject(OrderService);
    const spyOnService = spyOn(service, 'listOrders').and.returnValue(
      of(OrdersMock)
    );
    const spyOnSortOrders = spyOn(component, 'sortOrders');

    component.listOrders();
    
    expect(spyOnService).toHaveBeenCalled();
    expect(spyOnSortOrders).toHaveBeenCalledWith(OrdersMock);
  });

  it('should sort the given orders by ship date (older first)', () => {
    const sortedOrders = component.sortOrders(OrdersMock);
    expect(sortedOrders[0].orderNumber).toEqual(1);
    expect(sortedOrders[1].orderNumber).toEqual(3);
    expect(sortedOrders[2].orderNumber).toEqual(2);
  });
});
