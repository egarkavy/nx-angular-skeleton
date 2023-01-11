import { CheckoutEntity } from './checkout.models';
import {
  checkoutAdapter,
  CheckoutPartialState,
  initialCheckoutState,
} from './checkout.reducer';
import * as CheckoutSelectors from './checkout.selectors';

describe('Checkout Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCheckoutId = (it: CheckoutEntity) => it.id;
  const createCheckoutEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CheckoutEntity);

  let state: CheckoutPartialState;

  beforeEach(() => {
    state = {
      checkout: checkoutAdapter.setAll(
        [
          createCheckoutEntity('PRODUCT-AAA'),
          createCheckoutEntity('PRODUCT-BBB'),
          createCheckoutEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCheckoutState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Checkout Selectors', () => {
    it('selectAllCheckout() should return the list of Checkout', () => {
      const results = CheckoutSelectors.selectAllCheckout(state);
      const selId = getCheckoutId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CheckoutSelectors.selectEntity(state) as CheckoutEntity;
      const selId = getCheckoutId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCheckoutLoaded() should return the current "loaded" status', () => {
      const result = CheckoutSelectors.selectCheckoutLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCheckoutError() should return the current "error" state', () => {
      const result = CheckoutSelectors.selectCheckoutError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
