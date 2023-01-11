import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { ShopCatalogFeaturePartialState, ShopCatalogFeatureState, SHOP_CATALOG_FEATURE_KEY } from './shop-catalog.state';

export const getFeature: MemoizedSelector<ShopCatalogFeaturePartialState, ShopCatalogFeatureState> =
    createFeatureSelector<ShopCatalogFeatureState>(SHOP_CATALOG_FEATURE_KEY.FEATURE);
