import { OrderStatusEnum } from "../../models/enums/order-status-enum";

export interface StatusColorConfiguration {
    status: OrderStatusEnum,
    color: string;
    labelColor: string;
}

export const statusDefaultColors = [
    {
      status: OrderStatusEnum.OPEN,
      color: 'var(--grey)',
      labelColor: 'white'
    },
    {
      status: OrderStatusEnum.IN_PROGRESS,
      color: 'var(--warning)',
      labelColor: 'black'
    },
    {
      status: OrderStatusEnum.SUBMITTED,
      color: 'var(--info)',
      labelColor: 'white'
    },
    {
      status: OrderStatusEnum.SHIPPED,
      color: 'var(--success)',
      labelColor: 'white'
    }
  ];