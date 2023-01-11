import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './+state/items/items.effects';
import { ItemsFacade } from './+state/items/items.facade';
import { ShopCatalogUtilModule } from '@dev-team-monorepo/shop/catalog/util';
import { shopCatalogFeatureReducers, SHOP_CATALOG_FEATURE_KEY, SHOP_CATALOG_FEATURE_REDUCERS } from './+state/shop-catalog.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SHOP_CATALOG_FEATURE_KEY.FEATURE, SHOP_CATALOG_FEATURE_REDUCERS),
    EffectsModule.forFeature([ItemsEffects]),
    ShopCatalogUtilModule
  ],
  providers: [ItemsFacade, {
    provide: SHOP_CATALOG_FEATURE_REDUCERS,
    useValue: shopCatalogFeatureReducers,
}],
})
export class ShopCatalogDataAccessModule {}
