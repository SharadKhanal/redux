import {Bucket} from "../../models/bucket.model";
import {createReducer, on} from "@ngrx/store";
import {addToBucket, removeFromBucket} from "../actions/bucket.action";


const initialState:Bucket[] = [];


export const bucketReducer = createReducer(
  //state is current state

  initialState,
  on(addToBucket,(state,action)=>{

    const bucketItem = state.find(item=>item.id=== action.payload.id);

    if(bucketItem){
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item
      );
    } else{
      return [
        ...state,
        action.payload
      ]
    }
  }),
  on(removeFromBucket,(state,action)=>{
    const existingItem = state.find(item=>item.id ===action.payload.id);

    if(existingItem && existingItem.quantity >1){
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity -1 }
          : item
      );    } else{
      return state.filter(item =>item.id !==action.payload.id);
    }
})
);
