import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopCatalogFeatureItemListRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(shopCatalogFeatureItemListRoutes),
  ],
})
export class ShopCatalogFeatureItemListModule {}
