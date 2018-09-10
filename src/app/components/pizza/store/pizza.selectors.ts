import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPizzaState } from './pizza.state';

/**
 * Selects cart state from the root state object
 */
export const getPizzaState = createFeatureSelector<IPizzaState>('pizza');

export const getPizzaSelector = createSelector(getPizzaState, pizzaState => pizzaState.pizzas);