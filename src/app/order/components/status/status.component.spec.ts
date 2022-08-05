import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { statusDefaultColors } from './status-color-configuration';
import { OrderStatusEnum } from '../../models/enums/order-status-enum';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct status color based on the color configurations', () => {
    component.colors = statusDefaultColors;
    component.status = OrderStatusEnum.SUBMITTED;

    const returnedColor = component.getStatusColor();
    expect(returnedColor).toEqual('var(--info)');
  });

  it('should return the correct label status color based on the color configurations', () => {
    component.colors = statusDefaultColors;
    component.status = OrderStatusEnum.SUBMITTED;

    const returnedColor = component.getStatusLabelColor();
    expect(returnedColor).toEqual('white');
  });

  it('should return the correct status title based on the component status', () => {
    component.status = OrderStatusEnum.IN_PROGRESS;

    const returnedTitle = component.getStatusTitle();
    expect(returnedTitle).toEqual('In Progress');

    component.status = undefined;
    const returnedEmptyTitle = component.getStatusTitle();
    expect(returnedEmptyTitle).toEqual('');
  });
});
