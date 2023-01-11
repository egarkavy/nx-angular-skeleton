import { Route } from '@angular/router';
import { ItemListFeatureComponent } from './item-list-feature.component';

export const shopCatalogFeatureItemListRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: ItemListFeatureComponent}
];
