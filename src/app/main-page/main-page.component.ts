import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalAmount += newItem.amount;
  }
  deleteItem(item: BudgetItem){
    console.log("3")
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalAmount -= item.amount;

  }
}
