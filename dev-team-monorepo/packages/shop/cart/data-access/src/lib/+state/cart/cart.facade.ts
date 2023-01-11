import { Injectable, inject } from '@angular/core';
import { CartItem } from '@dev-team-monorepo/shop/cart/util';
import { select, Store } from '@ngrx/store';

import * as CartActions from './cart.actions';
import * as CartSelectors from './cart.selectors';

@Injectable()
export class CartFacade {
  private readonly store = inject(Store);

  allCart$ = this.store.pipe(select(CartSelectors.selectAllCart));
  allCartDict$ = this.store.pipe(select(CartSelectors.selectCartEntities));

  public addToCart(item: CartItem) {
    this.store.dispatch(CartActions.addToCart({item}));
  }

  public removeFromCart(id: number) {
    this.store.dispatch(CartActions.removeFromCart({id}));
  }

  public checkoutAll() {
    this.store.dispatch(CartActions.checkoutAll());
  }

  public checkoutOne(item: CartItem) {
    this.store.dispatch(CartActions.checkoutOne({item}));
  }
}
