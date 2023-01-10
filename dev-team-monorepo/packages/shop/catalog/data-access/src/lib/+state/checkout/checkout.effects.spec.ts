import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CheckoutActions from './checkout.actions';
import { CheckoutEffects } from './checkout.effects';

describe('CheckoutEffects', () => {
  let actions: Observable<Action>;
  let effects: CheckoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CheckoutEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CheckoutEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CheckoutActions.initCheckout() });

      const expected = hot('-a-|', {
        a: CheckoutActions.loadCheckoutSuccess({ checkout: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
