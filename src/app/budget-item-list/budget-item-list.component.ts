import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() deleteItem: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteButton(item: BudgetItem) {
    this.deleteItem.emit(item)

  }
}
