import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router'
import { CartFacade } from '@dev-team-monorepo/shop/cart/data-access';
import { map } from 'rxjs';

@Component({
  selector: 'shop-cart-summary-feature',
  templateUrl: './cart-summary-feature.component.html',
  styleUrls: ['./cart-summary-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSummaryFeatureComponent {

  itemsCount$ = this.cartFacade.allCart$.pipe(map(items => items.length));

  constructor(private readonly cartFacade: CartFacade, private router: Router) {}

  public goToCheckout(): void {
    this.cartFacade.checkoutAll();

    this.router.navigate(['/checkout'])
  }
}
