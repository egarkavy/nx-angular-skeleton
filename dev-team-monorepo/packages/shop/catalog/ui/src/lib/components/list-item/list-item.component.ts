import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CatalogItem } from '@dev-team-monorepo/shop/catalog/util';

@Component({
  selector: 'shop-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @Input() item: CatalogItem | undefined;
  @Input() isAddedToCart: boolean = false;

  @Output() addToCompareList = new EventEmitter();
  @Output() changeInCart = new EventEmitter<boolean>();
  @Output() instantBuy = new EventEmitter();
}
