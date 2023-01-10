import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import * as CheckoutActions from './checkout.actions';
import { CheckoutEffects } from './checkout.effects';
import { CheckoutFacade } from './checkout.facade';
import { CheckoutEntity } from './checkout.models';
import {
  CHECKOUT_FEATURE_KEY,
  CheckoutState,
  initialCheckoutState,
  checkoutReducer,
} from './checkout.reducer';
import * as CheckoutSelectors from './checkout.selectors';

interface TestSchema {
  checkout: CheckoutState;
}

describe('CheckoutFacade', () => {
  let facade: CheckoutFacade;
  let store: Store<TestSchema>;
  const createCheckoutEntity = (id: string, name = ''): CheckoutEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CHECKOUT_FEATURE_KEY, checkoutReducer),
          EffectsModule.forFeature([CheckoutEffects]),
        ],
        providers: [CheckoutFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CheckoutFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCheckout$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCheckout$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCheckoutSuccess` to manually update list
     */
    it('allCheckout$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCheckout$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CheckoutActions.loadCheckoutSuccess({
          checkout: [createCheckoutEntity('AAA'), createCheckoutEntity('BBB')],
        })
      );

      list = await readFirst(facade.allCheckout$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
