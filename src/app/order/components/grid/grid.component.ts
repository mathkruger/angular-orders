import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnType, GridColumn } from './grid-column';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() columns: GridColumn[] = [];
  @Input() data: any[] = [];
  @Input() showItemField = '';
  @Output() itemSelected = new EventEmitter<any>();

  columnTypeEnum = ColumnType;
  
  selectRow(item: any) {
    this.itemSelected.emit(item);
  }
}
