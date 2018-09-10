import { ActionReducerMap } from '@ngrx/store';
import { pizzaReducer } from '../app/components/pizza/store/pizza.reducer';

export const reducers: ActionReducerMap<any> = {
    pizza: pizzaReducer
};