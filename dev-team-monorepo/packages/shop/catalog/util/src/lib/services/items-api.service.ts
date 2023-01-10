import { Injectable } from '@angular/core';
import { ApiService, ResponseModel } from '@dev-team-monorepo/common/util';
import { Observable } from 'rxjs';
import { getItemsPath } from '../constants/api-paths.constant';
import { CatalogItem } from '../models';

@Injectable()
export class ItemsApiService {

  constructor(private readonly apiService: ApiService) { }

  getItems(): Observable<ResponseModel<CatalogItem>> {
    return this.apiService.get<CatalogItem>(getItemsPath);
  }
}
