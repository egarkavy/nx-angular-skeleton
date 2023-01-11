import { Route } from '@angular/router';
import { CheckoutFeatureComponent } from './checkout-feature.component';

export const shopCheckoutFeatureCheckoutRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: CheckoutFeatureComponent}
];
