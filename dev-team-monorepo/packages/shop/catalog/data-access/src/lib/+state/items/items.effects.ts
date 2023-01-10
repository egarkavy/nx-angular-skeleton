import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ItemsActions from './items.actions';
import * as ItemsFeature from './items.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class ItemsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.initItems),
      switchMap(() => of(ItemsActions.loadItemsSuccess({ items: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(ItemsActions.loadItemsFailure({ error }));
      })
    )
  );
}
