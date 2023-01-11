import { CartItem } from '@dev-team-monorepo/shop/cart/util';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CartActions from './cart.actions';

export const CART_FEATURE_KEY = 'cart';

export interface CartState extends EntityState<CartItem> {

}

export interface CartPartialState {
  readonly [CART_FEATURE_KEY]: CartState;
}

export const cartAdapter: EntityAdapter<CartItem> =
  createEntityAdapter<CartItem>();

export const initialCartState: CartState = cartAdapter.getInitialState({

});

const reducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state, { item }) =>
    cartAdapter.addOne(item, { ...state })
  ),
  on(CartActions.removeFromCart, (state, { id }) =>
    cartAdapter.removeOne(id, { ...state })
  ),
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}
