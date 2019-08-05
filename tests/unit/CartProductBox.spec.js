import { shallowMount } from '@vue/test-utils';
import CartProductBox from '@/components/CartPage/CartProductBox.vue';

describe('CartProductBox.vue', () => {
  it('updates item count when it renders', () => {
    const product = {
      currency: 'TRY',
      id: 1,
      image: 'https://cdn.glitch.com/a28552e7-44e1-4bbd-b298-5745e70c2209%2Fsampuan.jpeg?v=1561027551321',
      name: 'Şampuan',
      price: '13',
    };
    const wrapper = shallowMount(CartProductBox, {
      propsData: { product },
    });
    const button = wrapper.find('button');

    expect(button.text()).to.be.eql('+');
    expect(wrapper.text()).toContain('1');

    button.trigger('click');

    expect(wrapper.text()).toContain('2');
  });
});
