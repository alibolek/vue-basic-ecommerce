import { shallowMount } from '@vue/test-utils';
import Cart from '@/components/CartPage/Cart.vue';

describe('Cart.vue', () => {
  it('checks default message of empty cart', () => {
    const wrapper = shallowMount(Cart);
    expect(wrapper.text()).toContain('Your cart is empty');
  });
});
