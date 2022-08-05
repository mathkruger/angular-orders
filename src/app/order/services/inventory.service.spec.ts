import { TestBed, inject } from '@angular/core/testing';
import { InventoryService } from './inventory.service';

describe('Service: Inventory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryService]
    });
  });

  it('should return true', inject([InventoryService], (service: InventoryService) => {
    const spyOnRandom = spyOn(Math, 'random').and.returnValue(0.6);
    service.isProductInStock().subscribe(returnedValue => {
      expect(spyOnRandom).toHaveBeenCalled();
      expect(returnedValue).toEqual(true);
    });
  }));
});
