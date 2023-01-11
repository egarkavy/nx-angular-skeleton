import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

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
}
