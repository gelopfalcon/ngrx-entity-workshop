import { Action } from '@ngrx/store';
import { IPizzaState } from './pizza.state';
import { PizzaActionTypes, PizzaActions } from './pizza.actions';
import { error } from 'util';


export const initialState: IPizzaState = {
  pizzas : []
};

export function pizzaReducer(state = initialState, action: PizzaActions): IPizzaState {
  switch (action.type) {
    
    case PizzaActionTypes.LoadPizzasSuccess: {
      return {
        pizzas : action.payload
      }
    }
    case PizzaActionTypes.DeletePizzaSuccess: {
      return {
        pizzas: action.payload
      }
    }
    case PizzaActionTypes.UpdatePizzaSuccess: {
      return {
        pizzas: action.payload
      }
    }
    case PizzaActionTypes.AddPizzaSuccess: {
      return {
        pizzas: action.payload
      }
    }

    case PizzaActionTypes.AddPizzaFailed: {
      return {
        ...state,
        error: action.payload.error
      }
    }

    case PizzaActionTypes.UpdatePizzaFailed: {
      return {
        ...state,
        error: action.payload.error
      }
    }

    case PizzaActionTypes.DeletePizzaFailed: {
      return {
        ...state,
        error: action.payload.error
      }
    }

    case PizzaActionTypes.LoadPizzasFailed: {
      return {
        ...state,
        error: action.payload.error
      }
    }
    
    default:
      return state;
  }
}
