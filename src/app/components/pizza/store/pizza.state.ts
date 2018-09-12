import { IPizza } from "../interfaces/pizza.interface";
import { EntityState } from "@ngrx/entity";

export interface IPizzaState extends EntityState<IPizza> {
    error?: Error;
}