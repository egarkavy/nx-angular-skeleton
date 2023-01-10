import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsApiFacadeService } from './services/items-api-facade.service';
import { ItemsApiService } from './services/items-api.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ItemsApiFacadeService,
    ItemsApiService
  ]
})
export class ShopCatalogUtilModule {}
