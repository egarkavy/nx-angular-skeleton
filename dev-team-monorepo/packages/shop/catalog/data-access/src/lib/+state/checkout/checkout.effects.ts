import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CheckoutActions from './checkout.actions';
import * as CheckoutFeature from './checkout.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class CheckoutEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CheckoutActions.initCheckout),
      switchMap(() =>
        of(CheckoutActions.loadCheckoutSuccess({ checkout: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(CheckoutActions.loadCheckoutFailure({ error }));
      })
    )
  );
}
