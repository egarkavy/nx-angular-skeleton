import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopCheckoutFeatureCheckoutRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(shopCheckoutFeatureCheckoutRoutes),
  ],
})
export class ShopCheckoutFeatureCheckoutModule {}
