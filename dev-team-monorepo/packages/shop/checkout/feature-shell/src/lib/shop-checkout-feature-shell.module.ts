import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopCheckoutFeatureShellRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(shopCheckoutFeatureShellRoutes),
  ],
})
export class ShopCheckoutFeatureShellModule {}
