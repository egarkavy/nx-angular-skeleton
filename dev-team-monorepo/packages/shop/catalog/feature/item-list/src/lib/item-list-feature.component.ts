import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelStatus } from '@dev-team-monorepo/common/util';
import { CartFacade } from '@dev-team-monorepo/shop/cart/data-access';
import { ItemsFacade } from '@dev-team-monorepo/shop/catalog/data-access';
import { CatalogItem } from '@dev-team-monorepo/shop/catalog/util';
import { ItemListDataFacadeService } from './facade/item-list-data-facade.service';

@Component({
  selector: 'shop-item-list-feature',
  templateUrl: './item-list-feature.component.html',
  styleUrls: ['./item-list-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ItemListDataFacadeService
  ]
})
export class ItemListFeatureComponent implements OnInit {
  public items$ = this.dataFacade.items$;
  public status$ = this.dataFacade.status$;
  public allCartDict$ = this.cartFacade.allCartDict$;

  public modelStatus = ModelStatus

  constructor(private readonly dataFacade: ItemListDataFacadeService, private readonly cartFacade: CartFacade, private readonly router: Router) {}

  public ngOnInit(): void {
    this.dataFacade.init()
  }

  public changeInCart(add: boolean, item: CatalogItem): void {
    if (add) {
      this.cartFacade.addToCart(item);
    } else {
      this.cartFacade.removeFromCart(item.id)
    }
  }

  public instantBuy(item: CatalogItem): void {
    this.cartFacade.checkoutOne(item);

    this.router.navigate(['./checkout'])
  }

  public addToCompareList(): void {}
}
