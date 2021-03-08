import { BudgetItem } from './../shared/models/budget-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  @Input() item: BudgetItem;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem:BudgetItem){
    
  }

}
