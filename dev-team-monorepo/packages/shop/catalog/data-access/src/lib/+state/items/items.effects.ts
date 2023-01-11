import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ItemsActions from './items.actions';

import { switchMap, map } from 'rxjs';
import { ItemsApiFacadeService } from '@dev-team-monorepo/shop/catalog/util';

@Injectable()
export class ItemsEffects {
  private actions$ = inject(Actions);

  public requestItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.requestItems),
      switchMap(() => this.itemsApiFacadeService.getItems()),
      map(({data, success, message}) => {
        if (success) {
          return ItemsActions.requestItemsSuccess({items: data})
        } else {
          return ItemsActions.requestItemsError({ error: message || ''})
        }
      })
    )
  );

  constructor(private readonly itemsApiFacadeService: ItemsApiFacadeService) {

  }
}
