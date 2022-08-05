import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { Order } from '../../models/order';
import { OrderStatusEnum } from '../../models/enums/order-status-enum';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected id at calling the selectRow method', () => {
    const emitterSpy = spyOn(component.itemSelected, 'emit');
    const selectedItem: Order = {
      orderNumber: 1,
      shipDate: null,
      show: true,
      status: OrderStatusEnum.IN_PROGRESS,
      items: [],
      totalItemCount: 0
    }
    component.selectRow(selectedItem);

    expect(emitterSpy).toHaveBeenCalledWith(selectedItem);
  });
});
