import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromItems from './+state/items/items.reducer';
import { ItemsEffects } from './+state/items/items.effects';
import { ItemsFacade } from './+state/items/items.facade';
import * as fromCheckout from './+state/checkout/checkout.reducer';
import { CheckoutEffects } from './+state/checkout/checkout.effects';
import { CheckoutFacade } from './+state/checkout/checkout.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromItems.ITEMS_FEATURE_KEY, fromItems.itemsReducer),
    EffectsModule.forFeature([ItemsEffects]),
    StoreModule.forFeature(
      fromCheckout.CHECKOUT_FEATURE_KEY,
      fromCheckout.checkoutReducer
    ),
    EffectsModule.forFeature([CheckoutEffects]),
  ],
  providers: [ItemsFacade, CheckoutFacade],
})
export class ShopCatalogDataAccessModule {}
