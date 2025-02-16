import {state} from "@angular/animations";
import {Grocery} from "../../../models/grocery.model";
import {createFeatureSelector, createSelector} from "@ngrx/store";

// export const selectGroceries = (state:{groceries:Grocery[]})=>state.groceries;
 // also we can write the above code like this
 export const selectGroceries =  createFeatureSelector<Grocery[]>('groceries');


export const selectGroceryByType = (type:string)=>createSelector(
  selectGroceries,
  (state) =>{
    return state.filter(grocery=>grocery.type === type);
  }
)
