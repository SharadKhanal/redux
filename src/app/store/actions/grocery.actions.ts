import {createAction, createActionGroup, emptyProps, props} from "@ngrx/store";
import {Grocery} from "../../../models/grocery.model";


// export const initGroceries = createAction('[Grocery] Load Groceries');
// export const completedGroceries = createAction('[Grocery] Load Groceries Success');

 export const groceryAction =createActionGroup({
  source:"Grocery API", // this comes in square bracket like above [Grocery]
   events:{
    'Load groceries':emptyProps(),
     'Load groceries success':props<{payload:Grocery[]}>(),
     'Load groceries failure':emptyProps()
   }
})
