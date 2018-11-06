import App from '../../App.vue';
import { shallow } from '@vue/test-utils';

describe('App.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(App);
    expect(wrapper).toMatchSnapshot();
  });
});
