import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


const routes: Routes = [
    {
        path: 'catalog',
        loadChildren: () =>
            import('@dev-team-monorepo/shop/catalog/feature-shell').then(
                (module: typeof import('@dev-team-monorepo/shop/catalog/feature-shell')) => module.ShopCatalogFeatureShellModule,
            ),
    },
    {
        path: 'checkout',
        loadChildren: () =>
            import('@dev-team-monorepo/shop/checkout/feature-shell').then(
                (module: typeof import('@dev-team-monorepo/shop/checkout/feature-shell')) => module.ShopCheckoutFeatureShellModule,
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), StoreRouterConnectingModule.forRoot()],
    exports: [RouterModule],
})
export class AppRoutingModule {}
