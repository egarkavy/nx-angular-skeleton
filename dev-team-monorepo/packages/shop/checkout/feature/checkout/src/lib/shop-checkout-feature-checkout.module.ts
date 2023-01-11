import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopCheckoutFeatureCheckoutRoutes } from './lib.routes';
import { ShopCheckoutDataAccessModule } from '@dev-team-monorepo/shop/checkout/data-access';
import { CheckoutFeatureComponent } from './checkout-feature.component';

@NgModule({
  imports: [
    CommonModule,
    ShopCheckoutDataAccessModule,
    RouterModule.forChild(shopCheckoutFeatureCheckoutRoutes),
  ],
  declarations: [CheckoutFeatureComponent],
})
export class ShopCheckoutFeatureCheckoutModule {}
