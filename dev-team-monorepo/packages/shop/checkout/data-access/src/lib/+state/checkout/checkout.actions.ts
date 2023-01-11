import { createAction, props } from '@ngrx/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initCheckout = createAction('[Checkout] initCheckout', props<{ items: any[] }>());