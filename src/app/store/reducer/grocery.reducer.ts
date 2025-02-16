import {Grocery} from "../../../models/grocery.model";
import {createReducer, on} from "@ngrx/store";
import {groceryAction} from "../actions/grocery.actions";

//
// const initialState:Grocery[]= [
//     {
//       "id": 1,
//       "name": "Laptop",
//       "type": "Electronics"
//     },
//     {
//       "id": 2,
//       "name": "Basketball",
//       "type": "Sports"
//     },
//     {
//       "id": 3,
//       "name": "The Alchemist",
//       "type": "Book"
//     },
//     {
//       "id": 4,
//       "name": "Guitar",
//       "type": "Music"
//     }
// ]

const initialState: Grocery[] = []

 export const groceryReducer= createReducer(initialState,
 on(groceryAction.loadGroceriesSuccess,(state,action)=>{
    return action.payload;
 }),
   on(groceryAction.loadGroceriesFailure,(state,action)=>{
     return [];
   })

   );
