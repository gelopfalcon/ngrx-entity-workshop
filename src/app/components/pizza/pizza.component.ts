import { Component, OnInit } from '@angular/core';
import {
  FormControl,FormBuilder,FormGroup, Validators, NgForm
} from '@angular/forms';
import { Observable } from 'rxjs';
import { IPizza } from './interfaces/pizza.interface';
import { Store } from '@ngrx/store';
import { IPizzaState } from './store/pizza.state';
import { LoadPizzas } from './store/pizza.actions';
import { getPizzaSelector } from '../pizza/store/pizza.selectors';
import * as actions from '../pizza/store/pizza.actions';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizzaForm: FormGroup; 
  pizzas$: Observable<IPizza[]>;
  editing: boolean = false;
  editingPizza: IPizza;
  pizzas: Observable<any>;

  constructor(private fb: FormBuilder, private store: Store<IPizzaState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadPizzas());
    this.pizzas = this.store.select(getPizzaSelector)
    this.createForm();
    this.editingPizza = this.setPizzaDefault();
  }

  createForm() {
    this.pizzaForm = this.fb.group({
      name: ['', Validators.required ],
      price: ['', Validators.required ],
    });
  }

  deletePizza(id) {
    this.store.dispatch( new actions.DeletePizza({id}) )
  }

  editPizza(pizza: IPizza): void {
    this.editing = true;
    Object.assign(this.editingPizza, pizza); 
  }

  updatePizza(pizza:IPizza) {
    this.store.dispatch( new actions.UpdatePizza({ pizza}))
    this.clearEditing();
  }

  createPizza() {
    const pizzaName:string = this.pizzaForm.controls['name'].value;
    const pizzaPrice:number = this.pizzaForm.controls['price'].value;
    const pizza: IPizza = {
      id: new Date().getUTCMilliseconds().toString(),
      name: pizzaName,
      price: pizzaPrice,
      createdAt: new Date()
    }
    this.store.dispatch(new actions.AddPizza(pizza));
  }

  clearEditing(): void {
    this.editingPizza = this.setPizzaDefault();
    this.editing = false;
  }

  setPizzaDefault():IPizza {
    return {
      id: '',
      name : '',
      price : 0,
      createdAt : null
    }
  }

}
