import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopCheckoutFeatureCartRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(shopCheckoutFeatureCartRoutes)],
})
export class ShopCheckoutFeatureCartModule {}
