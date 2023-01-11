import { createSelector, MemoizedSelector } from '@ngrx/store';
import { getFeature } from '../shop-catalog.selectors';
import { ShopCatalogFeaturePartialState, ShopCatalogFeatureState, SHOP_CATALOG_FEATURE_STATE_KEY } from '../shop-catalog.state';
import { ItemsState, itemsAdapter } from './items.reducer';

const getState: MemoizedSelector<ShopCatalogFeaturePartialState, ItemsState> = createSelector(
  getFeature,
  (state: ShopCatalogFeatureState) => state[SHOP_CATALOG_FEATURE_STATE_KEY.ITEMS],
);

export const { selectAll: selectAllItems, selectEntities: selectItemsEntities } = itemsAdapter.getSelectors(getState);

export const selectStatus = createSelector(
  getState,
  (state: ItemsState) => state.status
);
