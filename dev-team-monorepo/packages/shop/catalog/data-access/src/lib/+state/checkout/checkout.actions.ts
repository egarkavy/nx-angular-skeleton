import { createAction, props } from '@ngrx/store';
import { CheckoutEntity } from './checkout.models';

export const initCheckout = createAction('[Checkout Page] Init');

export const loadCheckoutSuccess = createAction(
  '[Checkout/API] Load Checkout Success',
  props<{ checkout: CheckoutEntity[] }>()
);

export const loadCheckoutFailure = createAction(
  '[Checkout/API] Load Checkout Failure',
  props<{ error: any }>()
);
