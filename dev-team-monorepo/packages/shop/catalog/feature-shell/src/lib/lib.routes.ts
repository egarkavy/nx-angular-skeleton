import { Route } from '@angular/router';

export const shopCatalogFeatureShellRoutes: Route[] = [
    {
        path: '', pathMatch: 'full', loadChildren: () =>
            import('@dev-team-monorepo/shop/catalog/feature/item-list').then(
                (module: typeof import('@dev-team-monorepo/shop/catalog/feature/item-list')) => module.ShopCatalogFeatureItemListModule,
            ),
    },
    {
        path: 'compare', pathMatch: 'full', loadChildren: () =>
            import('@dev-team-monorepo/shop/catalog/feature/compare-items').then(
                (module: typeof import('@dev-team-monorepo/shop/catalog/feature/compare-items')) => module.ShopCatalogFeatureCompareItemsModule,
            ),
    }
];
