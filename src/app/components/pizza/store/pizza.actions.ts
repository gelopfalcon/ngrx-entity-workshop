import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IPizza } from '../interfaces/pizza.interface';

export enum PizzaActionTypes {
  LoadPizzas = '[Pizza] Load Pizzas',
  LoadPizzasSuccess = '[Pizza] LoadPizzasSuccess',
  LoadPizzasFailed = '[Pizza] LoadPizzasFailed',
  AddPizza = '[Pizza] Add Pizza',
  AddPizzaSuccess = '[Pizza] Add Pizza Success',
  AddPizzaFailed = '[Pizza] Add Pizza Failed',
  DeletePizza = '[Pizza] Delete Pizza',
  DeletePizzaSuccess = '[Pizza] Delete Pizza Success',
  DeletePizzaFailed = '[Pizza] DeletePizzaFailed',
  UpdatePizza = '[Pizza] UpdatePizza',
  UpdatePizzaSuccess = '[Pizza] UpdatePizzaSuccess',
  UpdatePizzaFailed = '[Pizza] UpdatePizzaFailed',
}

export class LoadPizzas implements Action {
  readonly type = PizzaActionTypes.LoadPizzas;

  constructor() {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = PizzaActionTypes.LoadPizzasSuccess;

  constructor(public payload: IPizza []) {}
}

export class LoadPizzasFailed implements Action {
  readonly type = PizzaActionTypes.LoadPizzasFailed;

  constructor(public payload: Error) {}
}

export class AddPizza implements Action {
  readonly type = PizzaActionTypes.AddPizza;

  constructor(public payload: IPizza) {}
}

export class AddPizzaSuccess implements Action {
  readonly type = PizzaActionTypes.AddPizzaSuccess;
  constructor(public payload: IPizza) {}
}

export class AddPizzaFailed implements Action {
  readonly type = PizzaActionTypes.AddPizzaFailed;
  constructor(public payload: Error) {}
}

export class DeletePizza implements Action {
  readonly type = PizzaActionTypes.DeletePizza;
  constructor(public payload: IPizza) {}
}

export class DeletePizzaSuccess implements Action {
  readonly type = PizzaActionTypes.DeletePizzaSuccess;
  constructor(public payload: IPizza) {}
}

export class DeletePizzaFailed implements Action {
  readonly type = PizzaActionTypes.DeletePizzaFailed;
  constructor(public payload: Error) {}
}

export class UpdatePizza implements Action {
  readonly type = PizzaActionTypes.UpdatePizza;

  constructor(public payload: IPizza ) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = PizzaActionTypes.UpdatePizzaSuccess;
  constructor(public payload: Update<IPizza>) {}
}

export class UpdatePizzaFailed implements Action {
  readonly type = PizzaActionTypes.UpdatePizzaFailed;
  constructor(public payload: Error) {}
}



export type PizzaActions =
 LoadPizzas
 | LoadPizzasSuccess
 | LoadPizzasFailed
 | AddPizza
 | AddPizzaSuccess
 | AddPizzaFailed
 | DeletePizza
 | DeletePizzaSuccess
 | DeletePizzaFailed
 | UpdatePizza
 | UpdatePizzaSuccess
 | UpdatePizzaFailed;
