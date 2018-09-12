import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPizzaState } from './pizza.state';
import { adapter } from './pizza.reducer';

/**
 * Selects cart state from the root state object
 */
export const getPizzaState = createFeatureSelector<IPizzaState>('pizza');

//export const getPizzaSelector = createSelector(getPizzaState, pizzaState => pizzaState.entities);

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors(getPizzaState);

  export const getPizzasPrices = createSelector(selectAll, pizzas =>  pizzas.filter(pizza => 
       pizza.price
  ));

  export const getPizzaSelector = createSelector(selectAll, pizzas => pizzas);