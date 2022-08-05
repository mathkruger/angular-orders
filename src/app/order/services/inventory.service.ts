import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  isProductInStock() {
    return of(Math.random() > 0.5);
  }
}
