import { createAction, props } from "@ngrx/store";
import { Grocery } from "../../models/grocery.model";

export const updateGrocery = createAction(
  '[Grocery] Update',
  props<{ payload: { id: number; name: string; quantity: number } }>()
);
