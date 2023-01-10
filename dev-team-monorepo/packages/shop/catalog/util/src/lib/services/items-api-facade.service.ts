import { Injectable } from '@angular/core';
import { ItemsApiService } from './items-api.service';

@Injectable()
export class ItemsApiFacadeService {

  constructor(private readonly apiService: ItemsApiService) { }
}
