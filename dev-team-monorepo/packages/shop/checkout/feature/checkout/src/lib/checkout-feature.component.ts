import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckoutFacade } from '@dev-team-monorepo/shop/checkout/data-access';

@Component({
  selector: 'shop-checkout-feature',
  templateUrl: './checkout-feature.component.html',
  styleUrls: ['./checkout-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutFeatureComponent {
  public allItems$ = this.checkoutFacade.allCheckout$;

  constructor(private readonly checkoutFacade: CheckoutFacade) {}
}
