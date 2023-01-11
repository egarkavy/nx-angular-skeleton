import { createAction, props } from '@ngrx/store';
import { CatalogItem } from '@dev-team-monorepo/shop/catalog/util'

export const requestItems = createAction('[Items] requestItems');
export const requestItemsSuccess = createAction('[Items] requestItemsSuccess', props<{ items: CatalogItem[] }>());
export const requestItemsError = createAction('[Items] requestItemsError', props<{ error: string }>());