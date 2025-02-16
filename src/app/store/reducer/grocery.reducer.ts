import {Grocery} from "../../models/grocery.model";
import {createReducer} from "@ngrx/store";


const initialState:Grocery[]= [
    {
      "id": 1,
      "name": "Laptop",
      "type": "Electronics"
    },
    {
      "id": 2,
      "name": "Basketball",
      "type": "Sports"
    },
    {
      "id": 3,
      "name": "The Alchemist",
      "type": "Book"
    },
    {
      "id": 4,
      "name": "Guitar",
      "type": "Music"
    }
]

 export const groceryReducer= createReducer(initialState);
