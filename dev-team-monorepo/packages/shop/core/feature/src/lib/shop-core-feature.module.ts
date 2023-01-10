import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService, API_BASE_URL, MessageBusService } from '@dev-team-monorepo/common/util';
import { ShopInterceptorsModule } from './interceptors/shop-interceptos.module';


@NgModule({
  imports: [HttpClientModule, ShopInterceptorsModule],
})
export class ShopCoreFeatureModule {
  public static forRoot(): ModuleWithProviders<ShopCoreFeatureModule> {
      return {
          ngModule: ShopCoreFeatureModule,
          providers: [
              ApiService,
              MessageBusService,
              {
                  provide: API_BASE_URL,
                  useValue: 'https://dev-team.com/api' //environment.apiBaseUrl,
              },
          ],
      };
  }

  constructor(@Optional() @SkipSelf() parentModule: ShopCoreFeatureModule) {
      if (parentModule) {
          throw new Error('ShopCoreUtilModule is already loaded. Import it in the AppModule only.');
      }
  }
}