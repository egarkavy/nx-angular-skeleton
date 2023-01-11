import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as CartActions from './cart.actions';
import * as CartFeature from './cart.reducer';

import { switchMap, withLatestFrom, of, tap } from 'rxjs';
import { MessageBusService } from '@dev-team-monorepo/common/util';
import { CartFacade } from './cart.facade';

@Injectable()
export class CartEffects {
  private actions$ = inject(Actions);

  checkoutAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.checkoutAll),
      withLatestFrom(this.facade.allCart$),
      tap(([, allItems]) => {
        this.messageBus.getBus('pushCheckoutItems').next(allItems);
      })
    ),
    {dispatch : false }
  );

  checkoutOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.checkoutOne),
      tap(({item}) => {
        this.messageBus.getBus('pushCheckoutItems').next([item]);
      })
    ),
    {dispatch : false }
  );

  constructor(private readonly messageBus: MessageBusService, private readonly facade: CartFacade) {}
}
