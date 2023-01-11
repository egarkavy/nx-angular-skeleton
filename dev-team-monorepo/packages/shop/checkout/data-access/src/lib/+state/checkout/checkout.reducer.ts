import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CheckoutActions from './checkout.actions';
import { CheckoutEntity } from './checkout.models';

export const CHECKOUT_FEATURE_KEY = 'checkout';

export interface CheckoutState extends EntityState<CheckoutEntity> {
  selectedId?: string | number; // which Checkout record has been selected
  loaded: boolean; // has the Checkout list been loaded
  error?: string | null; // last known error (if any)
}

export interface CheckoutPartialState {
  readonly [CHECKOUT_FEATURE_KEY]: CheckoutState;
}

export const checkoutAdapter: EntityAdapter<CheckoutEntity> =
  createEntityAdapter<CheckoutEntity>();

export const initialCheckoutState: CheckoutState =
  checkoutAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialCheckoutState,
  on(CheckoutActions.initCheckout, (state, { items }) =>
    checkoutAdapter.setAll(items, { ...state, loaded: true })
  ),
);

export function checkoutReducer(
  state: CheckoutState | undefined,
  action: Action
) {
  return reducer(state, action);
}
