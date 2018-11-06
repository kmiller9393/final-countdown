import ImageContainer from '../../components/ImageContainer.vue';
import { shallowMount } from '@vue/test-utils';

describe('ImageContainer.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(ImageContainer);
    expect(wrapper).toMatchSnapshot();
  });
});
