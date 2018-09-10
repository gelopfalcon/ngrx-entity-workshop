import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PizzaEffects } from './pizza.effects';

describe('PizzaEffects', () => {
  let actions$: Observable<any>;
  let effects: PizzaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PizzaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PizzaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
