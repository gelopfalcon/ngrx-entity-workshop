import { Action } from "@ngrx/store";
import { IPizzaState } from "./pizza.state";
import { PizzaActionTypes, PizzaActions } from "./pizza.actions";
import { error } from "util";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { IPizza } from "../interfaces/pizza.interface";

export const adapter: EntityAdapter<IPizza> = createEntityAdapter<IPizza>();

export const initialState: IPizzaState = adapter.getInitialState({
  error: null
});

export function pizzaReducer(
  state = initialState,
  action: PizzaActions
): IPizzaState {
  switch (action.type) {
    case PizzaActionTypes.LoadPizzasSuccess: {
      return adapter.addMany(action.payload, state);
    }

    case PizzaActionTypes.DeletePizzaSuccess: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PizzaActionTypes.UpdatePizzaSuccess: {
      return adapter.updateOne(action.payload, state);
    }
    case PizzaActionTypes.AddPizzaSuccess: {
      return adapter.addOne(action.payload, state);
    }

    case PizzaActionTypes.AddPizzaFailed: {
      return {
        ...state,
        error: action.payload
      };
    }

    case PizzaActionTypes.UpdatePizzaFailed: {
      return {
        ...state,
        error: action.payload
      };
    }

    case PizzaActionTypes.DeletePizzaFailed: {
      return {
        ...state,
        error: action.payload
      };
    }

    case PizzaActionTypes.LoadPizzasFailed: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
