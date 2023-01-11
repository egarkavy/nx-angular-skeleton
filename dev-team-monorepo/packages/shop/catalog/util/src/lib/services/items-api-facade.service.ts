import { Injectable } from '@angular/core';
import { ResponseModel } from '@dev-team-monorepo/common/util';
import { Observable } from 'rxjs';
import { CatalogItem } from '../models';
import { ItemsApiService } from './items-api.service';

@Injectable()
export class ItemsApiFacadeService {

  constructor(private readonly apiService: ItemsApiService) { }

  public getItems(): Observable<ResponseModel<CatalogItem[]>> {
    return this.apiService.getItems();
  }
}
