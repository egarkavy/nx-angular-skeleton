import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { ShopCoreFeatureModule } from '@dev-team-monorepo/shop/core/feature';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { EmptyComponent } from './emprty/emprty.component';
import { ShopCartFeatureCartSummaryModule } from '@dev-team-monorepo/shop/cart/feature/cart-summary';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShopCheckoutDataAccessModule } from '@dev-team-monorepo/shop/checkout/data-access';

@NgModule({
  declarations: [AppComponent, EmptyComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    ShopCoreFeatureModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ShopCartFeatureCartSummaryModule,
    StoreDevtoolsModule.instrument({
      name: 'Connect',
      maxAge: 25,
    }),
    ShopCheckoutDataAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
