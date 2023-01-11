import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCart from './+state/cart/cart.reducer';
import { CartEffects } from './+state/cart/cart.effects';
import { CartFacade } from './+state/cart/cart.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCart.CART_FEATURE_KEY, fromCart.cartReducer),
    EffectsModule.forFeature([CartEffects]),
  ],
  providers: [CartFacade],
})
export class ShopCartDataAccessModule {}
