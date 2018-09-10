import { IPizza } from "../interfaces/pizza.interface";

export interface IPizzaState {
    pizzas: IPizza[],
    error?: Error;
}