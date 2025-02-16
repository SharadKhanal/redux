

import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import {GroceryService} from "../../grocery.service";
import {groceryAction} from "../actions/grocery.actions";

@Injectable()
export class GroceryEffects {
  private actions$ = inject(Actions);
  private groceryService = inject(GroceryService);

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(groceryAction.loadGroceries),
      exhaustMap(() => this.groceryService.fetchAllGroceries()
        .pipe(
          map((groceries:any)=>(groceryAction.loadGroceriesSuccess({payload: groceries}))),
          catchError(() => of(groceryAction.loadGroceriesFailure()))
        )
      )
    );
  });
}
