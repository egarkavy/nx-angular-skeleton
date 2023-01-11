import { Injectable } from '@angular/core';
import { ItemsFacade } from '@dev-team-monorepo/shop/catalog/data-access';

@Injectable()
export class ItemListDataFacadeService {

  public items$ = this.itemsFacade.allItems$;
  public status$ = this.itemsFacade.status$;

  constructor(private readonly itemsFacade: ItemsFacade) { }

  public init(): void {
    this.itemsFacade.request();
  }
}
