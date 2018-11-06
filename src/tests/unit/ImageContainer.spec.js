import ImageContainer from '../../components/ImageContainer.vue';
import { shallow } from '@vue/test-utils';

describe('ImageContainer.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(ImageContainer);
    expect(wrapper).toMatchSnapshot();
  });
});
