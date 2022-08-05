import { OrderStatusEnum } from "./enums/order-status-enum";
import { OrderItem } from "./order-item";

export interface Order {
    orderNumber: number;
    totalItemCount: number;
    shipDate: Date | null;
    status: OrderStatusEnum;
    items: OrderItem[];
    show: boolean;
}