import { Injectable, inject } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';

import * as CheckoutActions from './checkout.actions';
import { MessageBusService } from '@dev-team-monorepo/common/util';

import { map } from 'rxjs';

@Injectable()
export class CheckoutEffects {
  init$ = createEffect(() =>
    this.messageBus.getBus('pushCheckoutItems').pipe(
      map((items) => {
        return CheckoutActions.initCheckout({items})
      })
    )
  );

  constructor(private readonly messageBus: MessageBusService) {}
}
