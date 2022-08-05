import { OrderStatusEnum } from "../models/enums/order-status-enum";
import { Order } from "../models/order";

export const OrdersMock: Order[] = [
  {
    orderNumber: 1,
    show: true,
    shipDate: new Date(2021, 0, 1),
    status: OrderStatusEnum.SHIPPED,
    totalItemCount: 2,
    items: [
      {
        id: 1,
        quantity: 10,
        product: {
          id: 1,
          name: 'Product 1',
          isInStock: null
        },
      },
      {
        id: 2,
        quantity: 5,
        product: {
          id: 2,
          name: 'Product 2',
          isInStock: null
        },
      }
    ]
  },
  {
    orderNumber: 2,
    show: true,
    shipDate: new Date(2021, 10, 10),
    status: OrderStatusEnum.IN_PROGRESS,
    totalItemCount: 1,
    items: [
      {
        id: 1,
        quantity: 20,
        product: {
          id: 1,
          name: 'Product 1',
          isInStock: null
        },
      },
    ]
  },
  {
    orderNumber: 3,
    show: true,
    shipDate: new Date(2021, 9, 10),
    status: OrderStatusEnum.SUBMITTED,
    totalItemCount: 3,
    items: [
      {
        id: 1,
        quantity: 20,
        product: {
          id: 1,
          name: 'Product 1',
          isInStock: null
        },
      },
      {
        id: 2,
        quantity: 5,
        product: {
          id: 2,
          name: 'Product 2',
          isInStock: null
        },
      },
      {
        id: 3,
        quantity: 1,
        product: {
          id: 3,
          name: 'Product 3',
          isInStock: null
        },
      },
    ]
  }
];