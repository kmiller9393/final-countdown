import Content from '../../components/Content.vue';
import { shallow } from '@vue/test-utils';

describe('Content.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(Content);
    expect(wrapper).toMatchSnapshot();
  });
});
