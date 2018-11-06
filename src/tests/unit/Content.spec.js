import Content from '../../components/Content.vue';
import { shallowMount } from '@vue/test-utils';

describe('Content.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(Content);
    expect(wrapper).toMatchSnapshot();
  });
});
