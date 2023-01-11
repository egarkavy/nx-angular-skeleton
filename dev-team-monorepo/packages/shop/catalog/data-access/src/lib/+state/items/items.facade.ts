import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { requestItems } from './items.actions';
import { selectAllItems, selectStatus } from './items.selectors';

@Injectable()
export class ItemsFacade {
  private readonly store = inject(Store);

  public status$ = this.store.pipe(select(selectStatus));
  public allItems$ = this.store.pipe(select(selectAllItems));

  request() {
    this.store.dispatch(requestItems());
  }
}
