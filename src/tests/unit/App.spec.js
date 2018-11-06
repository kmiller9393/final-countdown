import App from '../../App.vue';
import { shallowMount } from '@vue/test-utils';

describe('App.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(App);
    expect(wrapper).toMatchSnapshot();
  });
});
