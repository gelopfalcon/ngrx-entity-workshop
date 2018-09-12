import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { PizzaService } from "../services/pizza.service";
import { Store } from "@ngrx/store";
import { IPizzaState } from "../store/pizza.state";
import { Observable } from "rxjs";
import { find, cloneDeep } from "lodash";
import {
  PizzaActionTypes,
  LoadPizzas,
  LoadPizzasFailed,
  LoadPizzasSuccess,
  DeletePizza,
  DeletePizzaSuccess,
  DeletePizzaFailed,
  UpdatePizza,
  UpdatePizzaSuccess,
  UpdatePizzaFailed,
  AddPizza,
  AddPizzaSuccess,
  AddPizzaFailed
} from "./pizza.actions";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { IPizza } from "../interfaces/pizza.interface";
import { Update } from "@ngrx/entity";

@Injectable()
export class PizzaEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: PizzaService,
    private store: Store<IPizzaState>
  ) {}

  @Effect()
  getPizzas: Observable<any> = this.actions$
    .ofType<LoadPizzas>(PizzaActionTypes.LoadPizzas)
    .pipe(
      switchMap(() => {
        return this.pizzaService.getPizzas().pipe(
          map((data: IPizza[]) => new LoadPizzasSuccess(data)),
          catchError(err => of(new LoadPizzasFailed(err)))
        );
      })
    );

  @Effect()
  deletePizza: Observable<any> = this.actions$
    .ofType<DeletePizza>(PizzaActionTypes.DeletePizza)
    .pipe(
      switchMap(action => {
        return this.pizzaService.deletePizza(action.payload.id).pipe(
          map(() => {
            return new DeletePizzaSuccess(action.payload);
          }, catchError(err => of(new DeletePizzaFailed(err))))
        );
      })
    );

  @Effect()
  updatePizza: Observable<any> = this.actions$
    .ofType<UpdatePizza>(PizzaActionTypes.UpdatePizza)
    .pipe(
      switchMap(action => {
        return this.pizzaService.updatePizza(action.payload).pipe(
          map(pizza => {
            const updatedPizza: Update<IPizza> = {
              id: pizza.id,
              changes: {
                price: pizza.price
              }
            };
            return new UpdatePizzaSuccess(updatedPizza);
          }),
          catchError(err => of(new UpdatePizzaFailed(err)))
        );
      })
    );

  @Effect()
  addPizza: Observable<any> = this.actions$
    .ofType<AddPizza>(PizzaActionTypes.AddPizza)
    .pipe(
      switchMap(action => {
        return this.pizzaService.createPizza(action.payload).pipe(
          map(pizza => new AddPizzaSuccess(pizza)),
          catchError(err => of(new AddPizzaFailed(err)))
        );
      })
    );
}
