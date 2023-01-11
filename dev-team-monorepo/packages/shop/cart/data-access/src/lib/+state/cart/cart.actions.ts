import { createAction, props } from '@ngrx/store';
import { CartItem } from '@dev-team-monorepo/shop/cart/util';

export const addToCart = createAction(
  '[Cart] addToCart',
  props<{ item: CartItem }>()
);

export const removeFromCart = createAction(
  '[Cart] removeFromCart',
  props<{ id: number }>()
);

export const checkoutAll = createAction(
  '[Cart] checkoutAll',
);

export const checkoutOne = createAction(
  '[Cart] checkoutOne',
  props<{ item: CartItem }>()
);