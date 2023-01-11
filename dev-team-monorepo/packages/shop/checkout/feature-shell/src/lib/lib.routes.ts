import { Route } from '@angular/router';

export const shopCheckoutFeatureShellRoutes: Route[] = [
  {
    path: '', pathMatch: 'full', loadChildren: () =>
        import('@dev-team-monorepo/shop/checkout/feature/checkout').then(
            (module: typeof import('@dev-team-monorepo/shop/checkout/feature/checkout')) => module.ShopCheckoutFeatureCheckoutModule,
        ),
},
];
