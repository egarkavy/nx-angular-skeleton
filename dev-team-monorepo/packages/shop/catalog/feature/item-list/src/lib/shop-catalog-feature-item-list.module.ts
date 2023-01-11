import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopCatalogFeatureItemListRoutes } from './lib.routes';
import { ItemListFeatureComponent } from './item-list-feature.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ShopCatalogUiModule} from '@dev-team-monorepo/shop/catalog/ui'
import { ShopCatalogDataAccessModule } from '@dev-team-monorepo/shop/catalog/data-access';
import { MatButtonModule } from '@angular/material/button'
import { ShopCartDataAccessModule } from '@dev-team-monorepo/shop/cart/data-access';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(shopCatalogFeatureItemListRoutes),
    ShopCatalogUiModule,
    ShopCatalogDataAccessModule,
    MatButtonModule,
    ShopCartDataAccessModule
  ],
  declarations: [ItemListFeatureComponent],
})
export class ShopCatalogFeatureItemListModule {}
