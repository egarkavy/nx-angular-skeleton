import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CheckoutActions from './checkout.actions';
import * as CheckoutFeature from './checkout.reducer';
import * as CheckoutSelectors from './checkout.selectors';

@Injectable()
export class CheckoutFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CheckoutSelectors.selectCheckoutLoaded));
  allCheckout$ = this.store.pipe(select(CheckoutSelectors.selectAllCheckout));
  selectedCheckout$ = this.store.pipe(select(CheckoutSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(CheckoutActions.initCheckout());
  }
}
