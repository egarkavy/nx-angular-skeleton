import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopCatalogFeatureCompareItemsRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(shopCatalogFeatureCompareItemsRoutes),
  ],
})
export class ShopCatalogFeatureCompareItemsModule {}
