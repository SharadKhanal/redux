import {Component, OnInit, Signal} from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import {Store} from "@ngrx/store";
import {addToBucket, removeFromBucket} from "../../store/actions/bucket.action";
import {selectGroceries, selectGroceryByType} from "../../store/selectors/grocery.selector";


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent implements OnInit {
  // groceries$?:Observable<Grocery[]>;
  groceries?:Signal<Grocery[]>;
  filteredGroceries?:Signal<Grocery[]>;

  constructor(
    private store:Store<{groceries:Grocery[]}>
  ) {
    this.groceries = store.selectSignal(selectGroceries);
    console.log("Items:",   this.groceries)

  }



  onTypeChange(event: Event){
 const selectedType =(event.target as HTMLSelectElement).value;
  if(selectedType){
    this.filteredGroceries = this.store.selectSignal(selectGroceryByType (selectedType));
  } else{
    this.filteredGroceries=undefined;
  }
  }
  ngOnInit() {
     // const aa = this.store.select(selectGroceryByType("dfdf")).subscribe();
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    this.store.dispatch(addToBucket({payload}))
  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
    }
    this.store.dispatch(removeFromBucket({payload}))
  }

}
