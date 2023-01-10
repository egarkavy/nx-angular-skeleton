import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CHECKOUT_FEATURE_KEY,
  CheckoutState,
  checkoutAdapter,
} from './checkout.reducer';

// Lookup the 'Checkout' feature state managed by NgRx
export const selectCheckoutState =
  createFeatureSelector<CheckoutState>(CHECKOUT_FEATURE_KEY);

const { selectAll, selectEntities } = checkoutAdapter.getSelectors();

export const selectCheckoutLoaded = createSelector(
  selectCheckoutState,
  (state: CheckoutState) => state.loaded
);

export const selectCheckoutError = createSelector(
  selectCheckoutState,
  (state: CheckoutState) => state.error
);

export const selectAllCheckout = createSelector(
  selectCheckoutState,
  (state: CheckoutState) => selectAll(state)
);

export const selectCheckoutEntities = createSelector(
  selectCheckoutState,
  (state: CheckoutState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectCheckoutState,
  (state: CheckoutState) => state.selectedId
);

export const selectEntity = createSelector(
  selectCheckoutEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
