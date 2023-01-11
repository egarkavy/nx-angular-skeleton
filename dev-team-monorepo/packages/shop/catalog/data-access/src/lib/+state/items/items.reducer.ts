import { ModelStatus } from '@dev-team-monorepo/common/util';
import { CatalogItem } from '@dev-team-monorepo/shop/catalog/util';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as ItemsActions from './items.actions';

export interface ItemsState extends EntityState<CatalogItem> {
    status: ModelStatus
}

export const itemsAdapter: EntityAdapter<CatalogItem> =
    createEntityAdapter<CatalogItem>();

export const initialItemsState: ItemsState = itemsAdapter.getInitialState({
    status: ModelStatus.Init
});

export const itemsReducer = createReducer(
    initialItemsState,
    on(ItemsActions.requestItems, (state) => ({
        ...state,
        status: state.status === ModelStatus.Init ? ModelStatus.Init : ModelStatus.Pending,
    })),
    on(ItemsActions.requestItemsSuccess, (state, { items }) =>
        itemsAdapter.setAll(items, { ...state, status: ModelStatus.Success })
    ),
    on(ItemsActions.requestItemsError, (state) => ({ ...state, status: ModelStatus.Error }))
);
