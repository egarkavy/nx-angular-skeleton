import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCheckout from './+state/checkout/checkout.reducer';
import { CheckoutEffects } from './+state/checkout/checkout.effects';
import { CheckoutFacade } from './+state/checkout/checkout.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCheckout.CHECKOUT_FEATURE_KEY,
      fromCheckout.checkoutReducer
    ),
    EffectsModule.forFeature([CheckoutEffects]),
  ],
  providers: [CheckoutFacade],
})
export class ShopCheckoutDataAccessModule {}
