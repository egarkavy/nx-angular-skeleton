import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { itemsReducer, ItemsState } from './items/items.reducer';

export enum SHOP_CATALOG_FEATURE_KEY {
    FEATURE = 'catalog',
}

export enum SHOP_CATALOG_FEATURE_STATE_KEY {
    ITEMS = 'items',
    COMPARE_ITEMS = 'compareItems'
}

export interface ShopCatalogFeatureState {
    [SHOP_CATALOG_FEATURE_STATE_KEY.ITEMS]: ItemsState;
}

export const shopCatalogFeatureReducers: ActionReducerMap<ShopCatalogFeatureState> = {
    [SHOP_CATALOG_FEATURE_STATE_KEY.ITEMS]: itemsReducer,
};

export interface ShopCatalogFeaturePartialState {
    [SHOP_CATALOG_FEATURE_STATE_KEY.ITEMS]: ItemsState;
}

export const SHOP_CATALOG_FEATURE_REDUCERS: InjectionToken<ActionReducerMap<ShopCatalogFeatureState>> = new InjectionToken<
    ActionReducerMap<ShopCatalogFeatureState>
>('SHOP_CATALOG_FEATURE_REDUCERS');
