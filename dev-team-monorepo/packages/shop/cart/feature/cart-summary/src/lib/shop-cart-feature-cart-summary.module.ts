import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryFeatureComponent } from './cart-summary-feature.component';
import { ShopCartDataAccessModule } from '@dev-team-monorepo/shop/cart/data-access';

@NgModule({
  imports: [CommonModule, ShopCartDataAccessModule],
  declarations: [CartSummaryFeatureComponent],
  exports: [
    CartSummaryFeatureComponent
  ]
})
export class ShopCartFeatureCartSummaryModule {}
