import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import * as ItemsActions from './items.actions';
import { ItemsEffects } from './items.effects';
import { ItemsFacade } from './items.facade';
import { ItemsEntity } from './items.models';
import {
  ITEMS_FEATURE_KEY,
  ItemsState,
  initialItemsState,
  itemsReducer,
} from './items.reducer';
import * as ItemsSelectors from './items.selectors';

interface TestSchema {
  items: ItemsState;
}

describe('ItemsFacade', () => {
  let facade: ItemsFacade;
  let store: Store<TestSchema>;
  const createItemsEntity = (id: string, name = ''): ItemsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ITEMS_FEATURE_KEY, itemsReducer),
          EffectsModule.forFeature([ItemsEffects]),
        ],
        providers: [ItemsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(ItemsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allItems$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allItems$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadItemsSuccess` to manually update list
     */
    it('allItems$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allItems$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        ItemsActions.loadItemsSuccess({
          items: [createItemsEntity('AAA'), createItemsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allItems$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
